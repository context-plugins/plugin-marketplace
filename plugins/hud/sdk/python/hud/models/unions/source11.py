from __future__ import annotations

from typing import TypeAlias

from ..atif_audio_source import AtifAudioSource, AtifAudioSourceDict
from ..atif_image_source import AtifImageSource, AtifImageSourceDict

Source11: TypeAlias = AtifImageSource | AtifAudioSource

Source11Dict: TypeAlias = AtifImageSourceDict | AtifAudioSourceDict
