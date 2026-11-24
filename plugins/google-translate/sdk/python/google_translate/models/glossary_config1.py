from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GlossaryConfig1(SdkBaseModel):
    """Optional. Glossary to be applied. The glossary must be within the same region (have the same location-id) as the
    model, otherwise an INVALID_ARGUMENT (400) error is returned."""

    glossary: Optional[str] = UNSET
    """Required. The ``glossary`` to be applied for this translation. The format depends on the glossary: -
    User-provided custom glossary:
    ``projects/{project-number-or-id}/locations/{location-id}/glossaries/{glossary-id}``"""

    ignore_case: Optional[bool] = Field(default=UNSET, alias="ignoreCase")
    """Optional. Indicates match is case insensitive. The default value is ``false`` if missing."""

    contextual_translation_enabled: Optional[bool] = Field(default=UNSET, alias="contextualTranslationEnabled")
    """Optional. If set to true, the glossary will be used for contextual translation."""


class GlossaryConfig1Dict(TypedDict):
    glossary: NotRequired[str]
    ignore_case: NotRequired[bool]
    contextual_translation_enabled: NotRequired[bool]
