from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bulk_template import BulkTemplate, BulkTemplateDict


class BulkTemplatesResponse1(SdkBaseModel):
    data: Optional[BulkTemplate] = UNSET


class BulkTemplatesResponse1Dict(TypedDict):
    data: NotRequired[BulkTemplateDict]
