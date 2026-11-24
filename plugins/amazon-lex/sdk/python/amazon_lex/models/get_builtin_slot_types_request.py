from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.locale1 import Locale1OrStr


class GetBuiltinSlotTypesRequest(SdkBaseModel):
    locale: Optional[Locale1OrStr] = UNSET
    """A list of locales that the slot type supports."""

    signature_contains: Optional[str] = Field(default=UNSET, alias="signatureContains")
    """Substring to match in built-in slot type signatures. A slot type will be returned if any part of its signature
    matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz."
    """

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """A pagination token that fetches the next page of slot types. If the response to this API call is truncated,
    Amazon Lex returns a pagination token in the response. To fetch the next page of slot types, specify the pagination
    token in the next request."""

    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of slot types to return in the response. The default is 10."""


class GetBuiltinSlotTypesRequestDict(TypedDict):
    locale: NotRequired[Locale1OrStr]
    signature_contains: NotRequired[str]
    next_token: NotRequired[str]
    max_results: NotRequired[int]
