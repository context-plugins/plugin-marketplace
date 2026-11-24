from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PipelineVariable(SdkBaseModel):
    """All Of object, pipeline_variable."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    uuid: Optional[str] = UNSET
    """The UUID identifying the variable."""

    key: Optional[str] = UNSET
    """The unique name of the variable."""

    value: Optional[str] = UNSET
    """The value of the variable. If the variable is secured, this will be empty."""

    secured: Optional[bool] = UNSET
    """If true, this variable will be treated as secured. The value will never be exposed in the logs or the REST
    API."""


class PipelineVariableDict(TypedDict):
    type_: NotRequired[str]
    uuid: NotRequired[str]
    key: NotRequired[str]
    value: NotRequired[str]
    secured: NotRequired[bool]
