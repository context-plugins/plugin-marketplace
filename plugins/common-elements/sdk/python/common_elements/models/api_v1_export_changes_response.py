from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data_commonelements_com_bulk_export_api import (
    DataCommonelementsComBulkExportApi,
    DataCommonelementsComBulkExportApiDict,
)


class ApiV1ExportChangesResponse(SdkBaseModel):
    ok: Literal["True"] = "True"
    data: DataCommonelementsComBulkExportApi


class ApiV1ExportChangesResponseDict(TypedDict):
    ok: Literal["True"]
    data: DataCommonelementsComBulkExportApiDict
