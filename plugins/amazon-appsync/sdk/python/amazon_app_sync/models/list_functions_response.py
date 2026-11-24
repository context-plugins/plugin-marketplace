from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .function_configuration import FunctionConfiguration, FunctionConfigurationDict


class ListFunctionsResponse(SdkBaseModel):
    functions: Optional[list[FunctionConfiguration]] = UNSET
    """A list of Function objects."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """An identifier that was returned from the previous call to this operation, which you can use to return the next
    set of items in the list."""


class ListFunctionsResponseDict(TypedDict):
    functions: NotRequired[list[FunctionConfigurationDict]]
    next_token: NotRequired[str]
