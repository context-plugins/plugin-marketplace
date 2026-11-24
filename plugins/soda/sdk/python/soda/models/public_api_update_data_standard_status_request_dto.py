from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.data_standard_status_dto import DataStandardStatusDtoOrStr


class PublicApiUpdateDataStandardStatusRequestDto(SdkBaseModel):
    status: DataStandardStatusDtoOrStr


class PublicApiUpdateDataStandardStatusRequestDtoDict(TypedDict):
    status: DataStandardStatusDtoOrStr
