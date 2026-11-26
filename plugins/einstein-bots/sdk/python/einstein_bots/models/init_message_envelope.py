from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .force_config import ForceConfig, ForceConfigDict
from .referrer import Referrer, ReferrerDict
from .response_options import ResponseOptions, ResponseOptionsDict
from .text_init_message import TextInitMessage, TextInitMessageDict
from .unions.variable import Variable, VariableDict


class InitMessageEnvelope(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    external_session_key: str = Field(alias="externalSessionKey")
    """UUID in string format for the conversation. You can use this parameter to trace the conversation in your bot's
    event logs."""

    message: Optional[TextInitMessage] = UNSET
    force_config: ForceConfig = Field(alias="forceConfig")
    """API configuration parameters."""

    response_options: Optional[ResponseOptions] = Field(default=UNSET, alias="responseOptions")
    """Configuration of additional information returned in the response payload."""

    tz: OptionalNullable[str] = UNSET
    """Client timezone where the customer starts the chat."""

    variables: OptionalNullable[list[Variable]] = UNSET
    """Array of custom and context variables passed to the bot when initiating a session (see `What’s a Variable?
    <https://help.salesforce.com/s/articleView?id=sf.bots_service_whats_a_variable.htm&type=5&_ga=2.50520745.1281711304.1657558186-1967832163.1652719780>`__)."""

    referrers: OptionalNullable[list[Referrer]] = UNSET
    """Array of referrers of transferring the session to another bot."""


class InitMessageEnvelopeDict(TypedDict):
    external_session_key: str
    message: NotRequired[TextInitMessageDict]
    force_config: ForceConfigDict
    response_options: NotRequired[ResponseOptionsDict]
    tz: NotRequired[str | None]
    variables: NotRequired[list[VariableDict] | None]
    referrers: NotRequired[list[ReferrerDict] | None]
