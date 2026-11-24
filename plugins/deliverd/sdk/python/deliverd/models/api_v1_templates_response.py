from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .template_deliverd_dev_templates_api import TemplateDeliverdDevTemplatesApi, TemplateDeliverdDevTemplatesApiDict


class ApiV1TemplatesResponse(SdkBaseModel):
    templates: list[TemplateDeliverdDevTemplatesApi]


class ApiV1TemplatesResponseDict(TypedDict):
    templates: list[TemplateDeliverdDevTemplatesApiDict]
