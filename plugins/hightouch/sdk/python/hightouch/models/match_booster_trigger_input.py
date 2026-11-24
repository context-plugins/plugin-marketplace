from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.region import RegionOrStr


class MatchBoosterTriggerInput(SdkBaseModel):
    """The input of a trigger action to run a Match Booster enrichment."""

    model_config = ConfigDict(extra="forbid")

    force_full_enrichment: bool = Field(default=False, alias="forceFullEnrichment")
    """Whether to re-enrich all rows instead of only new/changed rows."""

    region: Optional[RegionOrStr] = UNSET
    """The Match Booster region to run the enrichment in. Defaults to the model's configured region."""


class MatchBoosterTriggerInputDict(TypedDict):
    force_full_enrichment: NotRequired[bool]
    region: NotRequired[RegionOrStr]
