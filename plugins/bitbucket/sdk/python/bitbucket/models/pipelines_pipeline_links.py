from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .pipelines_links_section_href1 import PipelinesLinksSectionHref1, PipelinesLinksSectionHref1Dict
from .pipelines_links_section_href3 import PipelinesLinksSectionHref3, PipelinesLinksSectionHref3Dict


class PipelinesPipelineLinks(SdkBaseModel):
    """All Of object, pipelines_pipeline_links."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    self: Optional[PipelinesLinksSectionHref3] = UNSET
    """Link to the Pipeline."""

    steps: Optional[PipelinesLinksSectionHref1] = UNSET
    """Link to the steps of the Pipeline."""


class PipelinesPipelineLinksDict(TypedDict):
    type_: NotRequired[str]
    self: NotRequired[PipelinesLinksSectionHref3Dict]
    steps: NotRequired[PipelinesLinksSectionHref1Dict]
