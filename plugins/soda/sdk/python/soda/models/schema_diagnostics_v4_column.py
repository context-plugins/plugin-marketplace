from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SchemaDiagnosticsV4Column(SdkBaseModel):
    name: Optional[str] = UNSET
    type_: Optional[str] = Field(default=UNSET, alias="type")


class SchemaDiagnosticsV4ColumnDict(TypedDict):
    name: NotRequired[str]
    type_: NotRequired[str]
