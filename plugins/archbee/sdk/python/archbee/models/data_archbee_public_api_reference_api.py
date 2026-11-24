from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DataArchbeePublicApiReferenceApi(SdkBaseModel):
    result: Optional[str] = UNSET
    imported_content: Optional[str] = Field(default=UNSET, alias="importedContent")


class DataArchbeePublicApiReferenceApiDict(TypedDict):
    result: NotRequired[str]
    imported_content: NotRequired[str]
