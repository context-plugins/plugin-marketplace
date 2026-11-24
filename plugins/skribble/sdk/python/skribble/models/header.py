from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class Header(SdkBaseModel):
    """Metadata and status information about the signature request"""

    signature_request_id: Optional[str] = Field(default=UNSET, alias="signatureRequestID")
    skribble_logo: OptionalNullable[str] = Field(default=UNSET, alias="skribbleLogo")
    title: Optional[str] = UNSET
    status: Optional[str] = UNSET
    signature_count: Optional[int] = Field(default=UNSET, alias="signatureCount")
    signature_count_signed: Optional[int] = Field(default=UNSET, alias="signatureCountSigned")
    attachment_names: Optional[str] = Field(default=UNSET, alias="attachmentNames")


class HeaderDict(TypedDict):
    signature_request_id: NotRequired[str]
    skribble_logo: NotRequired[str | None]
    title: NotRequired[str]
    status: NotRequired[str]
    signature_count: NotRequired[int]
    signature_count_signed: NotRequired[int]
    attachment_names: NotRequired[str]
