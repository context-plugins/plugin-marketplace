from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .document_input_config3 import DocumentInputConfig3, DocumentInputConfig3Dict
from .document_output_config1 import DocumentOutputConfig1, DocumentOutputConfig1Dict
from .translate_text_glossary_config2 import TranslateTextGlossaryConfig2, TranslateTextGlossaryConfig2Dict


class TranslateDocumentRequest(SdkBaseModel):
    """A document translation request."""

    labels: Optional[dict[str, str]] = UNSET
    """Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63
    characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes.
    International characters are allowed. Label values are optional. Label keys must start with a letter. See
    https://cloud.google.com/translate/docs/advanced/labels for more information."""

    glossary_config: Optional[TranslateTextGlossaryConfig2] = Field(default=UNSET, alias="glossaryConfig")
    """Optional. Glossary to be applied. The glossary must be within the same region (have the same location-id) as the
    model, otherwise an INVALID_ARGUMENT (400) error is returned."""

    target_language_code: Optional[str] = Field(default=UNSET, alias="targetLanguageCode")
    """Required. The ISO-639 language code to use for translation of the input document, set to one of the language
    codes listed in `Language Support <https://cloud.google.com/translate/docs/languages>`__."""

    is_translate_native_pdf_only: Optional[bool] = Field(default=UNSET, alias="isTranslateNativePdfOnly")
    """Optional. is_translate_native_pdf_only field for external customers. If true, the page limit of online native pdf
    translation is 300 and only native pdf pages will be translated."""

    enable_rotation_correction: Optional[bool] = Field(default=UNSET, alias="enableRotationCorrection")
    """Optional. If true, enable auto rotation correction in DVS."""

    enable_shadow_removal_native_pdf: Optional[bool] = Field(default=UNSET, alias="enableShadowRemovalNativePdf")
    """Optional. If true, use the text removal server to remove the shadow text on background image for native pdf
    translation. Shadow removal feature can only be enabled when is_translate_native_pdf_only: false && pdf_native_only:
    false"""

    customized_attribution: Optional[str] = Field(default=UNSET, alias="customizedAttribution")
    """Optional. This flag is to support user customized attribution. If not provided, the default is ``Machine
    Translated by Google``. Customized attribution should follow rules in
    https://cloud.google.com/translate/attribution#attribution_and_logos"""

    document_output_config: Optional[DocumentOutputConfig1] = Field(default=UNSET, alias="documentOutputConfig")
    """Optional. Output configurations. Defines if the output file should be stored within Cloud Storage as well as the
    desired output format. If not provided the translated file will only be returned through a byte-stream and its
    output mime type will be the same as the input file's mime type."""

    source_language_code: Optional[str] = Field(default=UNSET, alias="sourceLanguageCode")
    """Optional. The ISO-639 language code of the input document if known, for example, "en-US" or "sr-Latn". Supported
    language codes are listed in `Language Support <https://cloud.google.com/translate/docs/languages>`__. If the source
    language isn't specified, the API attempts to identify the source language automatically and returns the source
    language within the response. Source language must be specified if the request contains a glossary or a custom
    model."""

    document_input_config: Optional[DocumentInputConfig3] = Field(default=UNSET, alias="documentInputConfig")
    """Required. Input configurations."""

    model: Optional[str] = UNSET
    """Optional. The ``model`` type requested for this translation. The format depends on model type: - AutoML
    Translation models: ``projects/{project-number-or-id}/locations/{location-id}/models/{model-id}`` - General
    (built-in) models: ``projects/{project-number-or-id}/locations/{location-id}/models/general/nmt``, If not provided,
    the default Google model (NMT) will be used for translation."""


class TranslateDocumentRequestDict(TypedDict):
    labels: NotRequired[dict[str, str]]
    glossary_config: NotRequired[TranslateTextGlossaryConfig2Dict]
    target_language_code: NotRequired[str]
    is_translate_native_pdf_only: NotRequired[bool]
    enable_rotation_correction: NotRequired[bool]
    enable_shadow_removal_native_pdf: NotRequired[bool]
    customized_attribution: NotRequired[str]
    document_output_config: NotRequired[DocumentOutputConfig1Dict]
    source_language_code: NotRequired[str]
    document_input_config: NotRequired[DocumentInputConfig3Dict]
    model: NotRequired[str]
