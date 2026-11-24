from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.status_didlogic_com_sms_api import StatusDidlogicComSmsApiOrStr


class Sms1(SdkBaseModel):
    """SMS message details"""

    id: int
    """SMS ID"""

    destination: str
    """Destination number"""

    message: str
    """Message content"""

    status: StatusDidlogicComSmsApiOrStr
    """Delivery status"""

    charge: float
    """SMS cost"""

    segments_count: int
    """Number of segments"""

    error_code: int | None
    """Why the SMS failed, as an SMPP command_status; ``null`` unless ``status`` is ``failed``. A failure with no more
    specific code reads ``255``.
    - ``10`` (``ESME_RINVSRCADR``) — Invalid sender ID: the sender ID is not accepted for this destination
    - ``11`` (``ESME_RINVDSTADR``) — Invalid destination number: the destination number is not valid
    - ``69`` (``ESME_RSUBMITFAIL``) — Submit failed: the message was rejected and not delivered
    - ``255`` (``ESME_RUNKNOWNERR``) — Unknown error: the message failed for any other reason"""

    error_description: str | None
    """The text for ``error_code`` ("Invalid sender ID", "Invalid destination number", "Submit failed", "Unknown
    error"); ``null`` unless ``status`` is ``failed``."""


class Sms1Dict(TypedDict):
    id: int
    destination: str
    message: str
    status: StatusDidlogicComSmsApiOrStr
    charge: float
    segments_count: int
    error_code: int | None
    error_description: str | None
