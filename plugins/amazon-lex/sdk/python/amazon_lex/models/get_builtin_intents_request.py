from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.locale_amazon_lex_model_building_v2_builtins_api import LocaleAmazonLexModelBuildingV2BuiltinsApiOrStr


class GetBuiltinIntentsRequest(SdkBaseModel):
    locale: Optional[LocaleAmazonLexModelBuildingV2BuiltinsApiOrStr] = UNSET
    """A list of locales that the intent supports."""

    signature_contains: Optional[str] = Field(default=UNSET, alias="signatureContains")
    """Substring to match in built-in intent signatures. An intent will be returned if any part of its signature matches
    the substring. For example, "xyz" matches both "xyzabc" and "abcxyz." To find the signature for an intent, see
    Standard Built-in Intents in the Alexa Skills Kit."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """A pagination token that fetches the next page of intents. If this API call is truncated, Amazon Lex returns a
    pagination token in the response. To fetch the next page of intents, use the pagination token in the next
    request."""

    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of intents to return in the response. The default is 10."""


class GetBuiltinIntentsRequestDict(TypedDict):
    locale: NotRequired[LocaleAmazonLexModelBuildingV2BuiltinsApiOrStr]
    signature_contains: NotRequired[str]
    next_token: NotRequired[str]
    max_results: NotRequired[int]
