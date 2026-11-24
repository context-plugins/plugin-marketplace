from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.hangup_cause import HangupCauseOrStr
from .enums.type import TypeOrStr


class BaseCdr(SdkBaseModel):
    """Base call detail record with common fields"""

    timestamp: RFC3339DateTime
    """Call start time in ISO 8601 format (UTC)"""

    type_: TypeOrStr = Field(alias="type")
    """Call type"""

    amount: float
    """Call cost (charged/credited amount)"""

    duration: int
    """Call duration in seconds. 0 = missed call"""

    from_: str = Field(alias="from")
    """Caller number/identifier"""

    to: str
    """Destination number/identifier"""

    amd_status: str | None
    """Answering machine detection (AMD) verdict of an outbound call:
    - ``machine`` — AMD detected an answering machine
    - ``human`` — AMD detected a person
    - ``notsure`` — AMD ran but could not tell a machine from a person, for example on silence, unclear audio or a
        timeout

    ``null`` when no AMD result was recorded for the call, which is always the case for incoming calls."""

    amd_score: int | None
    """Probability that an answering machine picked up, as a percentage from 0 to 100, as reported by the AMD detector.
    It is not a confidence in ``amd_status``, and it carries no meaning when ``amd_status`` is ``notsure``. ``null``
    whenever ``amd_status`` is ``null``."""

    hangup_cause: HangupCauseOrStr | None
    """How the call ended:
    - ``AMD_MACHINE`` — AMD detected an answering machine; takes precedence over the other values
    - ``NORMAL_CLEARING`` — the call was answered
    - ``NO_ANSWER`` — nobody answered, including calls the caller cancelled before an answer
    - ``BUSY`` — the called party was busy
    - ``FAILED`` — the call could not be connected

    ``null`` for calls made before hangup causes were recorded, for calls whose outcome the platform did not recognise,
    and for API calls that never reached the destination number."""


class BaseCdrDict(TypedDict):
    timestamp: RFC3339DateTime
    type_: TypeOrStr
    amount: float
    duration: int
    from_: str
    to: str
    amd_status: str | None
    amd_score: int | None
    hangup_cause: HangupCauseOrStr | None
