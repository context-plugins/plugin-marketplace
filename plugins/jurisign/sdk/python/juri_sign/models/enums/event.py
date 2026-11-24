from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Event(str, Enum):
    SIGN_REQUEST_SENT = "sign_request.sent"
    SIGN_REQUEST_COMPLETED = "sign_request.completed"
    SIGN_REQUEST_CANCELLED = "sign_request.cancelled"
    SIGNER_SIGNED = "signer.signed"
    SIGNER_DECLINED = "signer.declined"
    SIGN_REQUEST_RELAUNCHED = "sign_request.relaunched"
    PUBLIC_FORM_SUBMITTED = "public_form.submitted"
    SIGN_REQUEST_SUBMITTED_FOR_APPROVAL = "sign_request.submitted_for_approval"
    SIGN_REQUEST_APPROVED = "sign_request.approved"
    SIGN_REQUEST_REJECTED = "sign_request.rejected"
    PAYMENT_COMPLETED = "payment.completed"
    PAYMENT_FAILED = "payment.failed"

    __str__ = str.__str__


EventOrStr: TypeAlias = Annotated[Event | str, open_enum_validator(Event)]
