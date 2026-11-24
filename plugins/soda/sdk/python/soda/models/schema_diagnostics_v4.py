from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .schema_diagnostics_v4_column import SchemaDiagnosticsV4Column, SchemaDiagnosticsV4ColumnDict


class SchemaDiagnosticsV4(SdkBaseModel):
    actual: Optional[list[SchemaDiagnosticsV4Column]] = UNSET
    expected: Optional[list[SchemaDiagnosticsV4Column]] = UNSET


class SchemaDiagnosticsV4Dict(TypedDict):
    actual: NotRequired[list[SchemaDiagnosticsV4ColumnDict]]
    expected: NotRequired[list[SchemaDiagnosticsV4ColumnDict]]
