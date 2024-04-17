import i18n from '@dhis2/d2-i18n'
import {
    Button,
    ButtonStrip,
    InputFieldFF,
    hasValue,
    Modal,
    ModalActions,
    ModalContent,
    ModalTitle,
    ReactFinalForm,
} from '@dhis2/ui'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './AddUpdateModal.module.css'

const { Field, Form: RFForm } = ReactFinalForm

export const AddUpdateModal = ({
    open,
    closeAddUpdateModal,
    updateParticipantDetails,
}) => {
    const addParticipant = () => {}
    const updateParticipant = () => {}

    return (
        <Modal hide={!open} onClose={closeAddUpdateModal}>
            <>
                <RFForm
                    onSubmit={
                        updateParticipantDetails
                            ? updateParticipant
                            : addParticipant
                    }
                >
                    {({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <ModalTitle>
                                {updateParticipantDetails
                                    ? i18n.t(
                                          `Update participant (${updateParticipantDetails.key})`
                                      )
                                    : i18n.t('Add participant')}
                            </ModalTitle>
                            <ModalContent>
                                <Field
                                    required
                                    name="name"
                                    label={i18n.t('Name')}
                                    component={InputFieldFF}
                                    validate={hasValue}
                                    className={styles.row}
                                    initialValue={
                                        updateParticipantDetails
                                            ? updateParticipantDetails?.value
                                                  ?.name
                                            : null
                                    }
                                />
                                <Field
                                    required
                                    name="country"
                                    label={i18n.t('Country of residence')}
                                    component={InputFieldFF}
                                    validate={hasValue}
                                    className={styles.row}
                                    initialValue={
                                        updateParticipantDetails
                                            ? updateParticipantDetails?.value
                                                  ?.country
                                            : null
                                    }
                                />
                                <Field
                                    required
                                    name="daysAttended"
                                    label={i18n.t('Days attended')}
                                    component={InputFieldFF}
                                    validate={hasValue}
                                    className={styles.row}
                                    initialValue={
                                        updateParticipantDetails
                                            ? updateParticipantDetails?.value?.daysAttended?.join(
                                                  ', '
                                              )
                                            : null
                                    }
                                />
                            </ModalContent>
                            <ModalActions>
                                <ButtonStrip>
                                    <Button onClick={closeAddUpdateModal}>
                                        {i18n.t('Cancel')}
                                    </Button>
                                    <Button primary>{i18n.t('Add')}</Button>
                                </ButtonStrip>
                            </ModalActions>
                        </form>
                    )}
                </RFForm>
            </>
        </Modal>
    )
}

AddUpdateModal.propTypes = {
    closeAddUpdateModal: PropTypes.func,
    open: PropTypes.bool,
    updateParticipantDetails: PropTypes.object,
}

export default AddUpdateModal