from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GcsDestination4(SdkBaseModel):
    """Optional. Google Cloud Storage destination for the translation output, e.g., ``gs://my_bucket/my_directory/``.
    The destination directory provided does not have to be empty, but the bucket must exist. If a file with the same
    name as the output file already exists in the destination an error will be returned. For a
    DocumentInputConfig.contents provided document, the output file will have the name
    "output_[trg]_translations.[ext]", where - [trg] corresponds to the translated file's language code, - [ext]
    corresponds to the translated file's extension according to its mime type. For a DocumentInputConfig.gcs_uri
    provided document, the output file will have a name according to its URI. For example: an input file with URI:
    ``gs://a/b/c.[extension]`` stored in a gcs_destination bucket with name "my_bucket" will have an output URI:
    ``gs://my_bucket/a_b_c_[trg]_translations.[ext]``, where - [trg] corresponds to the translated file's language code,
    - [ext] corresponds to the translated file's extension according to its mime type. If the document was directly
    provided through the request, then the output document will have the format:
    ``gs://my_bucket/translated_document_[trg]_translations.[ext]``, where - [trg] corresponds to the translated file's
    language code, - [ext] corresponds to the translated file's extension according to its mime type. If a glossary was
    provided, then the output URI for the glossary translation will be equal to the default output URI but have
    ``glossary_translations`` instead of ``translations``. For the previous example, its glossary URI would be:
    ``gs://my_bucket/a_b_c_[trg]_glossary_translations.[ext]``. Thus the max number of output files will be 2
    (Translated document, Glossary translated document). Callers should expect no partial outputs. If there is any error
    during document translation, no output will be stored in the Cloud Storage bucket."""

    output_uri_prefix: Optional[str] = Field(default=UNSET, alias="outputUriPrefix")
    """Required. The bucket used in 'output_uri_prefix' must exist and there must be no files under 'output_uri_prefix'.
    'output_uri_prefix' must end with "/" and start with "gs://". One 'output_uri_prefix' can only be used by one batch
    translation job at a time. Otherwise an INVALID_ARGUMENT (400) error is returned."""


class GcsDestination4Dict(TypedDict):
    output_uri_prefix: NotRequired[str]
