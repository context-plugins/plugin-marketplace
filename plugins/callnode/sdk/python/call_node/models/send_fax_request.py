from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.resolution import Resolution, ResolutionOrStr


class SendFaxRequest(SdkBaseModel):
    to: str
    """Destination fax number."""

    from_: str = Field(alias="from")
    """One of your active numbers. Printed in the fax header and sent as the station ID."""

    document: str
    """The PDF or TIFF as a base64 data URL (``data:application/pdf;base64,...``) or bare base64. 20 MB, 50 pages."""

    filename: Optional[str] = UNSET
    resolution: ResolutionOrStr = Resolution.FINE
    """fine = 204×196, standard = 204×98."""

    header: Optional[str] = UNSET
    """Header text on every page (letters, digits, space, ``. _ -``). Defaults to your number."""

    status_webhook_url: Optional[str] = Field(default=UNSET, alias="statusWebhookUrl")
    """Receives ``fax.completed`` / ``fax.failed``, signed per attempt with this key's secret (X-Timestamp, X-Signature,
    X-Event-Source)."""

    metadata: Optional[Any] = UNSET
    """Returned unchanged on the fax and in every webhook."""


class SendFaxRequestDict(TypedDict):
    to: str
    from_: str
    document: str
    filename: NotRequired[str]
    resolution: NotRequired[ResolutionOrStr]
    header: NotRequired[str]
    status_webhook_url: NotRequired[str]
    metadata: NotRequired[Any]
