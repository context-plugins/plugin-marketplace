from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class ImageResult(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    company_id: Optional[int] = Field(default=UNSET, alias="companyId")
    file_name: OptionalNullable[str] = Field(default=UNSET, alias="fileName")
    url: OptionalNullable[str] = UNSET
    preview_url: OptionalNullable[str] = Field(default=UNSET, alias="previewURL")
    thumb_url: OptionalNullable[str] = Field(default=UNSET, alias="thumbURL")


class ImageResultDict(TypedDict):
    company_id: NotRequired[int]
    file_name: NotRequired[str | None]
    url: NotRequired[str | None]
    preview_url: NotRequired[str | None]
    thumb_url: NotRequired[str | None]
