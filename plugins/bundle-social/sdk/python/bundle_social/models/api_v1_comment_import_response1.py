from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .import_model import ImportModel, ImportModelDict


class ApiV1CommentImportResponse1(SdkBaseModel):
    imports: list[ImportModel]


class ApiV1CommentImportResponse1Dict(TypedDict):
    imports: list[ImportModelDict]
