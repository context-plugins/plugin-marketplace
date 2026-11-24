from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.status4_bundle_social_post_csv_api import Status4BundleSocialPostCsvApiOrStr


class Item1BundleSocialPostCsvApi(SdkBaseModel):
    id: str
    import_id: str = Field(alias="importId")
    row_number: float = Field(alias="rowNumber")
    status: Status4BundleSocialPostCsvApiOrStr
    post_id: OptionalNullable[str] = Field(default=UNSET, alias="postId")
    raw_row: OptionalNullable[dict[str, str]] = Field(default=UNSET, alias="rawRow")
    normalized_payload: Optional[Any] = Field(default=UNSET, alias="normalizedPayload")
    error: OptionalNullable[str] = UNSET
    created_at: RFC3339DateTime | None = Field(alias="createdAt")


class Item1BundleSocialPostCsvApiDict(TypedDict):
    id: str
    import_id: str
    row_number: float
    status: Status4BundleSocialPostCsvApiOrStr
    post_id: NotRequired[str | None]
    raw_row: NotRequired[dict[str, str] | None]
    normalized_payload: NotRequired[Any]
    error: NotRequired[str | None]
    created_at: RFC3339DateTime | None
