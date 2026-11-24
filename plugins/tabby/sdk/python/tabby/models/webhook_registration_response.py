from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .header3 import Header3, Header3Dict


class WebhookRegistrationResponse(SdkBaseModel):
    header: OptionalNullable[Header3] = UNSET
    id: Optional[str] = UNSET
    """Unique webhook ID, assigned by Tabby."""

    is_test: bool = False
    """Indicates whether to use this hook in test environment or not."""

    url: str
    """HTTPS endpoint for notifications. The URL should be valid and accessible (not local)."""


class WebhookRegistrationResponseDict(TypedDict):
    header: NotRequired[Header3Dict | None]
    id: NotRequired[str]
    is_test: bool
    url: str
