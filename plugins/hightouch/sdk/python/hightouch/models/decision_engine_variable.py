from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .config_model import ConfigModel, ConfigModelDict
from .decision_engine_variable_variant import DecisionEngineVariableVariant, DecisionEngineVariableVariantDict


class DecisionEngineVariable(SdkBaseModel):
    """Message variable (Public API)"""

    model_config = ConfigDict(extra="forbid")

    name: str
    """The variable name (must be unique within a message)"""

    config: Optional[ConfigModel] = UNSET
    variants: list[DecisionEngineVariableVariant]


class DecisionEngineVariableDict(TypedDict):
    name: str
    config: NotRequired[ConfigModelDict]
    variants: list[DecisionEngineVariableVariantDict]
