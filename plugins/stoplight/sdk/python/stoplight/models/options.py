from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Options(SdkBaseModel):
    remove_extra_endpoints: Optional[bool] = Field(default=UNSET, alias="removeExtraEndpoints")
    """Default: false."""

    remove_extra_schemas: Optional[bool] = Field(default=UNSET, alias="removeExtraSchemas")
    """Default: false."""

    remove_extra_text_sections: Optional[bool] = Field(default=UNSET, alias="removeExtraTextSections")
    """Default: false."""

    remove_extra_traits: Optional[bool] = Field(default=UNSET, alias="removeExtraTraits")
    """Default: false."""


class OptionsDict(TypedDict):
    remove_extra_endpoints: NotRequired[bool]
    remove_extra_schemas: NotRequired[bool]
    remove_extra_text_sections: NotRequired[bool]
    remove_extra_traits: NotRequired[bool]
