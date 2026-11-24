from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .pagination import Pagination, PaginationDict
from .template_juri_sign_templates_api import TemplateJuriSignTemplatesApi, TemplateJuriSignTemplatesApiDict


class TemplatesResponse(SdkBaseModel):
    data: Optional[list[TemplateJuriSignTemplatesApi]] = UNSET
    meta: Optional[Pagination] = UNSET


class TemplatesResponseDict(TypedDict):
    data: NotRequired[list[TemplateJuriSignTemplatesApiDict]]
    meta: NotRequired[PaginationDict]
