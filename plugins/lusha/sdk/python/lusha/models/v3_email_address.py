from __future__ import annotations

from pydantic import EmailStr, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, OptionalNullable, SdkBaseModel
from .enums.type_lusha_api_documentation_enrich_api import TypeLushaApiDocumentationEnrichApiOrStr


class V3EmailAddress(SdkBaseModel):
    email: Optional[EmailStr] = UNSET
    type_: Optional[TypeLushaApiDocumentationEnrichApiOrStr] = Field(default=UNSET, alias="type")
    confidence: OptionalNullable[str] = UNSET
    update_date: Optional[Date] = Field(default=UNSET, alias="updateDate")


class V3EmailAddressDict(TypedDict):
    email: NotRequired[EmailStr]
    type_: NotRequired[TypeLushaApiDocumentationEnrichApiOrStr]
    confidence: NotRequired[str | None]
    update_date: NotRequired[Date]
