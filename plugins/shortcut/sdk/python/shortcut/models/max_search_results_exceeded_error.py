from __future__ import annotations

from typing import Literal

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class MaxSearchResultsExceededError(SdkBaseModel):
    """Error returned when total maximum supported results have been reached."""

    model_config = ConfigDict(extra="forbid")

    error: Literal["maximum-results-exceeded"] = "maximum-results-exceeded"
    """The name for this type of error, ``maximum-results-exceeded``"""

    message: str
    """An explanatory message: "A maximum of 1000 search results are supported."
    """

    maximum_results: Literal[1000] = Field(default=1000, alias="maximum-results")
    """The maximum number of search results supported, ``1000``"""


class MaxSearchResultsExceededErrorDict(TypedDict):
    error: Literal["maximum-results-exceeded"]
    message: str
    maximum_results: Literal[1000]
