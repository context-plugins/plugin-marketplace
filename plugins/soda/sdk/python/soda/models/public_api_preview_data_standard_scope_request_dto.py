from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data_standard_scope_dto import DataStandardScopeDto, DataStandardScopeDtoDict


class PublicApiPreviewDataStandardScopeRequestDto(SdkBaseModel):
    page: Optional[int] = UNSET
    scope: Optional[DataStandardScopeDto] = UNSET
    size: Optional[int] = UNSET


class PublicApiPreviewDataStandardScopeRequestDtoDict(TypedDict):
    page: NotRequired[int]
    scope: NotRequired[DataStandardScopeDtoDict]
    size: NotRequired[int]
