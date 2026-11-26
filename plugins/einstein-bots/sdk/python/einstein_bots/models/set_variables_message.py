from __future__ import annotations

from typing import Literal

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .unions.variable import Variable, VariableDict


class SetVariablesMessage(SdkBaseModel):
    """Update existing session variables"""

    model_config = ConfigDict(extra="forbid")

    type_: Literal["setVariables"] = Field(default="setVariables", alias="type")
    """Message type"""

    sequence_id: int = Field(alias="sequenceId")
    """Client-generated sequence number of the message in a session. Increase this number for each subsequent
    message."""

    variables: list[Variable] | None
    """Array of custom and context variables passed to the bot when initiating a session (see `What’s a Variable?
    <https://help.salesforce.com/s/articleView?id=sf.bots_service_whats_a_variable.htm&type=5&_ga=2.50520745.1281711304.1657558186-1967832163.1652719780>`__)."""


class SetVariablesMessageDict(TypedDict):
    type_: Literal["setVariables"]
    sequence_id: int
    variables: list[VariableDict] | None
