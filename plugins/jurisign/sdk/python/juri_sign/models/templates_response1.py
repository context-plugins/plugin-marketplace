from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .template_detailed import TemplateDetailed, TemplateDetailedDict


class TemplatesResponse1(SdkBaseModel):
    data: Optional[TemplateDetailed] = UNSET


class TemplatesResponse1Dict(TypedDict):
    data: NotRequired[TemplateDetailedDict]
