from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .glossary_config1 import GlossaryConfig1, GlossaryConfig1Dict
from .reference_sentence_config1 import ReferenceSentenceConfig1, ReferenceSentenceConfig1Dict


class AdaptiveMtTranslateRequest(SdkBaseModel):
    """The request for sending an AdaptiveMt translation query."""

    glossary_config: Optional[GlossaryConfig1] = Field(default=UNSET, alias="glossaryConfig")
    """Optional. Glossary to be applied. The glossary must be within the same region (have the same location-id) as the
    model, otherwise an INVALID_ARGUMENT (400) error is returned."""

    mime_type: Optional[str] = Field(default=UNSET, alias="mimeType")
    """The format of the source text. Currently only text/plain is supported."""

    dataset: Optional[str] = UNSET
    """Required. The resource name for the dataset to use for adaptive MT translation.
    ``projects/{project}/locations/{location-id}/adaptiveMtDatasets/{dataset}``"""

    reference_sentence_config: Optional[ReferenceSentenceConfig1] = Field(
        default=UNSET, alias="referenceSentenceConfig"
    )
    """Configuration for caller provided reference sentences."""

    content: Optional[list[str]] = UNSET
    """Required. The content of the input in string format."""


class AdaptiveMtTranslateRequestDict(TypedDict):
    glossary_config: NotRequired[GlossaryConfig1Dict]
    mime_type: NotRequired[str]
    dataset: NotRequired[str]
    reference_sentence_config: NotRequired[ReferenceSentenceConfig1Dict]
    content: NotRequired[list[str]]
