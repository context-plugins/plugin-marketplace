from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RecognitionAudio(SdkBaseModel):
    """Contains audio data in the encoding specified in the ``RecognitionConfig``. Either ``content`` or ``uri`` must be
    supplied. Supplying both or neither returns google.rpc.Code.INVALID_ARGUMENT. See `content limits
    <https://cloud.google.com/speech-to-text/quotas#content>`__."""

    content: Optional[str] = UNSET
    """The audio data bytes encoded as specified in ``RecognitionConfig``. Note: as with all bytes fields, proto buffers
    use a pure binary representation, whereas JSON representations use base64."""

    uri: Optional[str] = UNSET
    """URI that points to a file that contains audio data bytes as specified in ``RecognitionConfig``. The file must not
    be compressed (for example, gzip). Currently, only Google Cloud Storage URIs are supported, which must be specified
    in the following format: ``gs://bucket_name/object_name`` (other URI formats return
    google.rpc.Code.INVALID_ARGUMENT). For more information, see `Request URIs
    <https://cloud.google.com/storage/docs/reference-uris>`__."""


class RecognitionAudioDict(TypedDict):
    content: NotRequired[str]
    uri: NotRequired[str]
