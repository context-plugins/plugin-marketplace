from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.entity_source import EntitySourceOrStr


class NormalizedEntity(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    confidence_score: float = Field(alias="confidenceScore")
    """Probability number that the AI assigns to this entity."""

    value: str
    """Value of the entity that the customer enters."""

    type_: str = Field(alias="type")
    """System or custom entity Type (`What’s an Entity?
    <https://help.salesforce.com/s/articleView?id=sf.bots_service_whats_an_entity.htm&type=5>`__)."""

    entity_source: Optional[EntitySourceOrStr] = Field(default=UNSET, alias="entitySource")
    """"Prediction system that detects the entity. The Bot API can call NLPs or it can figure out the entity by itself."

    * ``BOT_SERVICE``—Bot detects entity without Natural Language Processing (NLP)
    * ``CORE_NLP``—Third-party NLP
    * ``EINSTEIN_NLP``—Einstein NLP"""


class NormalizedEntityDict(TypedDict):
    confidence_score: float
    value: str
    type_: str
    entity_source: NotRequired[EntitySourceOrStr]
