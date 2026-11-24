from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .enums.type_lusha_api_documentation_search_api import TypeLushaApiDocumentationSearchApiOrStr


class V3CompanySignalsDto(SdkBaseModel):
    types: list[TypeLushaApiDocumentationSearchApiOrStr]
    start_date: Optional[Date] = Field(default=UNSET, alias="startDate")
    max_results_per_signal: Optional[int] = Field(default=UNSET, alias="maxResultsPerSignal")


class V3CompanySignalsDtoDict(TypedDict):
    types: list[TypeLushaApiDocumentationSearchApiOrStr]
    start_date: NotRequired[Date]
    max_results_per_signal: NotRequired[int]
