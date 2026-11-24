from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

ApigeeOrganizationsApiproductsAttributesUpdateApiProductAttributeErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _ApigeeOrganizationsApiproductsAttributesUpdateApiProductAttributeError:
    def map(
        self, status_code: int, content: bytes
    ) -> ApigeeOrganizationsApiproductsAttributesUpdateApiProductAttributeErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


apigee_organizations_apiproducts_attributes_update_api_product_attribute_error_mapper: Final[
    ErrorMapper[ApigeeOrganizationsApiproductsAttributesUpdateApiProductAttributeErrorBody]
] = _ApigeeOrganizationsApiproductsAttributesUpdateApiProductAttributeError()
