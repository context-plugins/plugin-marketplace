from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .batch_document_input_config import BatchDocumentInputConfig, BatchDocumentInputConfigDict
from .batch_document_output_config1 import BatchDocumentOutputConfig1, BatchDocumentOutputConfig1Dict
from .translate_text_glossary_config import TranslateTextGlossaryConfig, TranslateTextGlossaryConfigDict


class BatchTranslateDocumentRequest(SdkBaseModel):
    """The BatchTranslateDocument request."""

    customized_attribution: Optional[str] = Field(default=UNSET, alias="customizedAttribution")
    """Optional. This flag is to support user customized attribution. If not provided, the default is ``Machine
    Translated by Google``. Customized attribution should follow rules in
    https://cloud.google.com/translate/attribution#attribution_and_logos"""

    output_config: Optional[BatchDocumentOutputConfig1] = Field(default=UNSET, alias="outputConfig")
    """Required. Output configuration. If 2 input configs match to the same file (that is, same input path), we don't
    generate output for duplicate inputs."""

    enable_shadow_removal_native_pdf: Optional[bool] = Field(default=UNSET, alias="enableShadowRemovalNativePdf")
    """Optional. If true, use the text removal server to remove the shadow text on background image for native pdf
    translation. Shadow removal feature can only be enabled when is_translate_native_pdf_only: false && pdf_native_only:
    false"""

    models: Optional[dict[str, str]] = UNSET
    """Optional. The models to use for translation. Map's key is target language code. Map's value is the model name.
    Value can be a built-in general model, or an AutoML Translation model. The value format depends on model type: -
    AutoML Translation models: ``projects/{project-number-or-id}/locations/{location-id}/models/{model-id}`` - General
    (built-in) models: ``projects/{project-number-or-id}/locations/{location-id}/models/general/nmt``, If the map is
    empty or a specific model is not requested for a language pair, then default google model (nmt) is used."""

    target_language_codes: Optional[list[str]] = Field(default=UNSET, alias="targetLanguageCodes")
    """Required. The ISO-639 language code to use for translation of the input document. Specify up to 10 language codes
    here. Supported language codes are listed in `Language Support
    <https://cloud.google.com/translate/docs/languages>`__."""

    format_conversions: Optional[dict[str, str]] = Field(default=UNSET, alias="formatConversions")
    """Optional. The file format conversion map that is applied to all input files. The map key is the original
    mime_type. The map value is the target mime_type of translated documents. Supported file format conversion includes:
    - ``application/pdf`` to ``application/vnd.openxmlformats-officedocument.wordprocessingml.document`` If nothing
    specified, output files will be in the same format as the original file."""

    glossaries: Optional[dict[str, TranslateTextGlossaryConfig]] = UNSET
    """Optional. Glossaries to be applied. It's keyed by target language code."""

    source_language_code: Optional[str] = Field(default=UNSET, alias="sourceLanguageCode")
    """Required. The ISO-639 language code of the input document if known, for example, "en-US" or "sr-Latn". Supported
    language codes are listed in `Language Support <https://cloud.google.com/translate/docs/languages>`__."""

    input_configs: Optional[list[BatchDocumentInputConfig]] = Field(default=UNSET, alias="inputConfigs")
    """Required. Input configurations. The total number of files matched should be <= 100. The total content size to
    translate should be <= 100M Unicode codepoints. The files must use UTF-8 encoding."""

    pdf_native_only: Optional[bool] = Field(default=UNSET, alias="pdfNativeOnly")
    """Optional. If true, only native pdf pages will be translated."""

    enable_rotation_correction: Optional[bool] = Field(default=UNSET, alias="enableRotationCorrection")
    """Optional. If true, enable auto rotation correction in DVS."""


class BatchTranslateDocumentRequestDict(TypedDict):
    customized_attribution: NotRequired[str]
    output_config: NotRequired[BatchDocumentOutputConfig1Dict]
    enable_shadow_removal_native_pdf: NotRequired[bool]
    models: NotRequired[dict[str, str]]
    target_language_codes: NotRequired[list[str]]
    format_conversions: NotRequired[dict[str, str]]
    glossaries: NotRequired[dict[str, TranslateTextGlossaryConfigDict]]
    source_language_code: NotRequired[str]
    input_configs: NotRequired[list[BatchDocumentInputConfigDict]]
    pdf_native_only: NotRequired[bool]
    enable_rotation_correction: NotRequired[bool]
