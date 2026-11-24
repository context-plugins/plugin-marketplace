from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .enums.type_lusha_api_documentation_prospecting_api import TypeLushaApiDocumentationProspectingApiOrStr


class Signals(SdkBaseModel):
    types: Optional[list[TypeLushaApiDocumentationProspectingApiOrStr]] = UNSET
    start_date: Optional[Date] = Field(default=UNSET, alias="startDate")


class SignalsDict(TypedDict):
    types: NotRequired[list[TypeLushaApiDocumentationProspectingApiOrStr]]
    start_date: NotRequired[Date]
