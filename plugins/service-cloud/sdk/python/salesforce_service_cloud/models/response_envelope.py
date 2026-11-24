from __future__ import annotations

from typing import Any

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .links import Links, LinksDict
from .normalized_entity import NormalizedEntity, NormalizedEntityDict
from .normalized_intent import NormalizedIntent, NormalizedIntentDict
from .unions.message import Message, MessageDict
from .unions.variable import Variable, VariableDict


class ResponseEnvelope(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    session_id: str = Field(alias="sessionId")
    """Bot runtime session ID."""

    bot_version: str | None = Field(alias="botVersion")
    """Bot configuration version."""

    processed_sequence_ids: list[int] = Field(alias="processedSequenceIds")
    """Sequence IDs of messages that the bot processed. Except for the initial request to start the session, all
    requests require a ``sequenceId``."""

    messages: list[Message]
    """Messages from the bot."""

    variables: OptionalNullable[list[Variable]] = UNSET
    """Array of custom and context variables passed to the bot when initiating a session (see `What’s a Variable?
    <https://help.salesforce.com/s/articleView?id=sf.bots_service_whats_a_variable.htm&type=5&_ga=2.50520745.1281711304.1657558186-1967832163.1652719780>`__)."""

    metrics: Optional[Any] = UNSET
    """Session metrics."""

    intents: Optional[list[NormalizedIntent]] = UNSET
    """Array of the intents detected by the bot when processing the request. For a bot, "intent" refers to the goal the
    customer (see `Use Intents to Understand Your Customers
    <https://help.salesforce.com/s/articleView?id=sf.bots_service_train_bot.htm&type=5&_ga=2.5901875.1281711304.1657558186-1967832163.1652719780>`__)."""

    entities: Optional[list[NormalizedEntity]] = UNSET
    """Array of all entities detected by the bot when processing this request. For a bot, "Entities" refer to the
    modifiers the customer uses to describe their issue and intent is what they really mean."""

    links: Links = Field(alias="_links")
    """List of Einstein Bots API endpoints for HATEOS compliancy."""


class ResponseEnvelopeDict(TypedDict):
    session_id: str
    bot_version: str | None
    processed_sequence_ids: list[int]
    messages: list[MessageDict]
    variables: NotRequired[list[VariableDict] | None]
    metrics: NotRequired[Any]
    intents: NotRequired[list[NormalizedIntentDict]]
    entities: NotRequired[list[NormalizedEntityDict]]
    links: LinksDict
