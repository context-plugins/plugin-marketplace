from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class CreateSealRequest(SdkBaseModel):
    content: str
    """Base64 encoded bytes of the document."""

    account_name: Optional[str] = UNSET
    """Account name of the seal contract that should be used. If your company own more than one seal and the field
    account_name is not given or empty, then the first given seal for the API user will be used for sealing."""

    title: Optional[str] = UNSET
    """Title of the document."""

    visual_signature: OptionalNullable[Any] = UNSET


class CreateSealRequestDict(TypedDict):
    content: str
    account_name: NotRequired[str]
    title: NotRequired[str]
    visual_signature: NotRequired[Any | None]
