from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .response_options_variables import ResponseOptionsVariables, ResponseOptionsVariablesDict


class ResponseOptions(SdkBaseModel):
    """Configuration of additional information returned in the response payload."""

    model_config = ConfigDict(extra="forbid")

    variables: Optional[ResponseOptionsVariables] = UNSET
    """Variables returned in the response."""

    metrics: Optional[bool] = UNSET
    """Indicates whether to include metrics in the response."""

    intents: Optional[bool] = UNSET
    """Indicates whether to include all intents detected when processing the current request."""

    entities: Optional[bool] = UNSET
    """Indicates whether to include all entities detected when processing the current request."""


class ResponseOptionsDict(TypedDict):
    variables: NotRequired[ResponseOptionsVariablesDict]
    metrics: NotRequired[bool]
    intents: NotRequired[bool]
    entities: NotRequired[bool]
