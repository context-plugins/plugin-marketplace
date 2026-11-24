from __future__ import annotations

from typing import TypeAlias

from ..api_v1_styleguide_request import ApiV1StyleguideRequest, ApiV1StyleguideRequestDict
from ..api_v1_styleguide_request1 import ApiV1StyleguideRequest1, ApiV1StyleguideRequest1Dict
from ..api_v1_styleguide_request2 import ApiV1StyleguideRequest2, ApiV1StyleguideRequest2Dict
from ..api_v1_styleguide_request3 import ApiV1StyleguideRequest3, ApiV1StyleguideRequest3Dict

ApiV1StyleguideRequest4: TypeAlias = (
    ApiV1StyleguideRequest | ApiV1StyleguideRequest1 | ApiV1StyleguideRequest2 | ApiV1StyleguideRequest3
)

ApiV1StyleguideRequest4Dict: TypeAlias = (
    ApiV1StyleguideRequestDict | ApiV1StyleguideRequest1Dict | ApiV1StyleguideRequest2Dict | ApiV1StyleguideRequest3Dict
)
