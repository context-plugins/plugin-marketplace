from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.type import TypeOrStr
from .key_result_value import KeyResultValue, KeyResultValueDict


class KeyResult(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    id: UUID
    """The ID of the Key Result."""

    name: str
    """The name of the Key Result."""

    objective_id: int
    """The Objective to which this Key Result belongs."""

    type_: TypeOrStr = Field(alias="type")
    """The type of the Key Result (numeric, percent, or boolean)."""

    initial_observed_value: KeyResultValue
    """The starting value of the Key Result."""

    current_observed_value: KeyResultValue
    """The starting value of the Key Result."""

    current_target_value: KeyResultValue
    """The starting value of the Key Result."""

    progress: int
    """The integer percentage of progress toward completion of the Key Result."""


class KeyResultDict(TypedDict):
    id: UUID
    name: str
    objective_id: int
    type_: TypeOrStr
    initial_observed_value: KeyResultValueDict
    current_observed_value: KeyResultValueDict
    current_target_value: KeyResultValueDict
    progress: int
