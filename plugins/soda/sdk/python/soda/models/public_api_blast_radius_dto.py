from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.rca_asset_type_dto import RcaAssetTypeDtoOrStr


class PublicApiBlastRadiusDto(SdkBaseModel):
    asset_type: Optional[RcaAssetTypeDtoOrStr] = Field(default=UNSET, alias="assetType")
    count: Optional[int] = UNSET


class PublicApiBlastRadiusDtoDict(TypedDict):
    asset_type: NotRequired[RcaAssetTypeDtoOrStr]
    count: NotRequired[int]
