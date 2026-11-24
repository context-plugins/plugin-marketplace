from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.state_equals import StateEqualsOrStr


class ListMedicalVocabulariesRequest(SdkBaseModel):
    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If your ListMedicalVocabularies request returns more results than can be displayed, NextToken is displayed in the
    response with an associated string. To get the next page of results, copy this string and repeat your request,
    including NextToken with the value of the copied string. Repeat as needed to view all your results."""

    max_results: Optional[int] = Field(default=UNSET, alias="MaxResults")
    """The maximum number of custom medical vocabularies to return in each page of results. If there are fewer results
    than the value that you specify, only the actual results are returned. If you do not specify a value, a default of 5
    is used."""

    state_equals: Optional[StateEqualsOrStr] = Field(default=UNSET, alias="StateEquals")
    """Returns only custom medical vocabularies with the specified state. Custom vocabularies are ordered by creation
    date, with the newest vocabulary first. If you do not include StateEquals, all custom medical vocabularies are
    returned."""

    name_contains: Optional[str] = Field(default=UNSET, alias="NameContains")
    """Returns only the custom medical vocabularies that contain the specified string. The search is not case
    sensitive."""


class ListMedicalVocabulariesRequestDict(TypedDict):
    next_token: NotRequired[str]
    max_results: NotRequired[int]
    state_equals: NotRequired[StateEqualsOrStr]
    name_contains: NotRequired[str]
