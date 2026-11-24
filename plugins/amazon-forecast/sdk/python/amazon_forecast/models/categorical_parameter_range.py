from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CategoricalParameterRange(SdkBaseModel):
    name: str = Field(alias="Name")
    """The name of the categorical hyperparameter to tune."""

    values: list[str] = Field(alias="Values")
    """A list of the tunable categories for the hyperparameter."""


class CategoricalParameterRangeDict(TypedDict):
    name: str
    values: list[str]
