from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .company import Company, CompanyDict
from .user import User, UserDict

if TYPE_CHECKING:
    from .gallery import Gallery, GalleryDict


class Media(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    id: Optional[int] = UNSET
    url: str
    description: OptionalNullable[str] = UNSET
    order_number: OptionalNullable[int] = Field(default=UNSET, alias="orderNumber")
    created_on: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="createdOn")
    is_display: Optional[bool] = Field(default=UNSET, alias="isDisplay")
    is_deleted: Optional[bool] = Field(default=UNSET, alias="isDeleted")
    gallery_id: OptionalNullable[int] = Field(default=UNSET, alias="galleryId")
    media_type: Optional[int] = Field(default=UNSET, alias="mediaType")
    company_id: Optional[int] = Field(default=UNSET, alias="companyId")
    user_id: Optional[int] = Field(default=UNSET, alias="userId")
    path: OptionalNullable[str] = UNSET
    company: Optional[Company] = UNSET
    gallery: Optional[Gallery] = UNSET
    user: Optional[User] = UNSET


class MediaDict(TypedDict):
    id: NotRequired[int]
    url: str
    description: NotRequired[str | None]
    order_number: NotRequired[int | None]
    created_on: NotRequired[RFC3339DateTime | None]
    is_display: NotRequired[bool]
    is_deleted: NotRequired[bool]
    gallery_id: NotRequired[int | None]
    media_type: NotRequired[int]
    company_id: NotRequired[int]
    user_id: NotRequired[int]
    path: NotRequired[str | None]
    company: NotRequired[CompanyDict]
    gallery: NotRequired[GalleryDict]
    user: NotRequired[UserDict]
