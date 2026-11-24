from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusDoiTSignupApi(str, Enum):
    PENDING_CONSENT = "pending_consent"
    CONSENTED = "consented"
    PROVISIONING = "provisioning"
    COMPLETED = "completed"
    REJECTED = "rejected"
    EXPIRED = "expired"
    FAILED = "failed"

    __str__ = str.__str__


StatusDoiTSignupApiOrStr: TypeAlias = Annotated[StatusDoiTSignupApi | str, open_enum_validator(StatusDoiTSignupApi)]
