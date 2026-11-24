from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MultipleValuesSetting(SdkBaseModel):
    allow_multiple_values: Optional[bool] = Field(default=UNSET, alias="allowMultipleValues")
    """Indicates whether a slot can return multiple values. When true, the slot may return more than one value in a
    response. When false, the slot returns only a single value. Multi-value slots are only available in the en-US
    locale. If you set this value to true in any other locale, Amazon Lex throws a ValidationException. If the
    allowMutlipleValues is not set, the default value is false."""


class MultipleValuesSettingDict(TypedDict):
    allow_multiple_values: NotRequired[bool]
