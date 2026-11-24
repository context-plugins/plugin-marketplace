from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TranslateTextGlossaryConfig3(SdkBaseModel):
    """The ``glossary_config`` used for this translation."""

    contextual_translation_enabled: Optional[bool] = Field(default=UNSET, alias="contextualTranslationEnabled")
    """Optional. If set to true, the glossary will be used for contextual translation."""

    glossary: Optional[str] = UNSET
    """Required. The ``glossary`` to be applied for this translation. The format depends on the glossary: -
    User-provided custom glossary:
    ``projects/{project-number-or-id}/locations/{location-id}/glossaries/{glossary-id}``"""

    ignore_case: Optional[bool] = Field(default=UNSET, alias="ignoreCase")
    """Optional. Indicates match is case insensitive. The default value is ``false`` if missing."""


class TranslateTextGlossaryConfig3Dict(TypedDict):
    contextual_translation_enabled: NotRequired[bool]
    glossary: NotRequired[str]
    ignore_case: NotRequired[bool]
