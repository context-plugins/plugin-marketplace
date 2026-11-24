from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .document_translation1 import DocumentTranslation1, DocumentTranslation1Dict
from .document_translation3 import DocumentTranslation3, DocumentTranslation3Dict
from .translate_text_glossary_config3 import TranslateTextGlossaryConfig3, TranslateTextGlossaryConfig3Dict


class TranslateDocumentResponse(SdkBaseModel):
    """A translated document response message."""

    glossary_config: Optional[TranslateTextGlossaryConfig3] = Field(default=UNSET, alias="glossaryConfig")
    """The ``glossary_config`` used for this translation."""

    model: Optional[str] = UNSET
    """Only present when 'model' is present in the request. 'model' is normalized to have a project number. For example:
    If the 'model' field in TranslateDocumentRequest is:
    ``projects/{project-id}/locations/{location-id}/models/general/nmt`` then ``model`` here would be normalized to
    ``projects/{project-number}/locations/{location-id}/models/general/nmt``."""

    glossary_document_translation: Optional[DocumentTranslation3] = Field(
        default=UNSET, alias="glossaryDocumentTranslation"
    )
    """The document's translation output if a glossary is provided in the request. This can be the same as
    [TranslateDocumentResponse.document_translation] if no glossary terms apply."""

    document_translation: Optional[DocumentTranslation1] = Field(default=UNSET, alias="documentTranslation")
    """Translated document."""


class TranslateDocumentResponseDict(TypedDict):
    glossary_config: NotRequired[TranslateTextGlossaryConfig3Dict]
    model: NotRequired[str]
    glossary_document_translation: NotRequired[DocumentTranslation3Dict]
    document_translation: NotRequired[DocumentTranslation1Dict]
