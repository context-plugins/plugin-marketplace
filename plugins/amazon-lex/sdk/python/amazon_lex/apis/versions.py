from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_bot_version2_error import CreateBotVersion2ErrorBody, create_bot_version2_error_mapper
from ..errors.create_intent_version_error import CreateIntentVersionErrorBody, create_intent_version_error_mapper
from ..errors.create_slot_type_version_error import (
    CreateSlotTypeVersionErrorBody,
    create_slot_type_version_error_mapper,
)
from ..errors.delete_bot_version2_error import DeleteBotVersion2ErrorBody, delete_bot_version2_error_mapper
from ..errors.delete_intent_version_error import DeleteIntentVersionErrorBody, delete_intent_version_error_mapper
from ..errors.delete_slot_type_version2_error import (
    DeleteSlotTypeVersion2ErrorBody,
    delete_slot_type_version2_error_mapper,
)
from ..errors.get_bot_error import GetBotErrorBody, get_bot_error_mapper
from ..errors.get_bot_versions_error import GetBotVersionsErrorBody, get_bot_versions_error_mapper
from ..errors.get_intent_error import GetIntentErrorBody, get_intent_error_mapper
from ..errors.get_intent_versions_error import GetIntentVersionsErrorBody, get_intent_versions_error_mapper
from ..errors.get_slot_type_error import GetSlotTypeErrorBody, get_slot_type_error_mapper
from ..errors.get_slot_type_versions_error import GetSlotTypeVersionsErrorBody, get_slot_type_versions_error_mapper
from ..errors.put_bot_error import PutBotErrorBody, put_bot_error_mapper
from ..errors.put_intent_error import PutIntentErrorBody, put_intent_error_mapper
from ..errors.put_slot_type_error import PutSlotTypeErrorBody, put_slot_type_error_mapper
from ..models.create_intent_version_request import CreateIntentVersionRequest, CreateIntentVersionRequestDict
from ..models.create_intent_version_response import CreateIntentVersionResponse
from ..models.create_slot_type_version_request import CreateSlotTypeVersionRequest, CreateSlotTypeVersionRequestDict
from ..models.create_slot_type_version_response import CreateSlotTypeVersionResponse
from ..models.delete_intent_version_request import DeleteIntentVersionRequest, DeleteIntentVersionRequestDict
from ..models.delete_slot_type_version_request import DeleteSlotTypeVersionRequest, DeleteSlotTypeVersionRequestDict
from ..models.get_bot_response import GetBotResponse
from ..models.get_bot_versions_response import GetBotVersionsResponse
from ..models.get_intent_response import GetIntentResponse
from ..models.get_intent_versions_response import GetIntentVersionsResponse
from ..models.get_slot_type_response import GetSlotTypeResponse
from ..models.get_slot_type_versions_response import GetSlotTypeVersionsResponse
from ..models.models_lex_create_bot_version_request import (
    ModelsLexCreateBotVersionRequest,
    ModelsLexCreateBotVersionRequestDict,
)
from ..models.models_lex_create_bot_version_response_amazon_lex_model_building_v2_versions_api import (
    ModelsLexCreateBotVersionResponseAmazonLexModelBuildingV2VersionsApi,
)
from ..models.models_lex_delete_bot_version_request import (
    ModelsLexDeleteBotVersionRequest,
    ModelsLexDeleteBotVersionRequestDict,
)
from ..models.put_bot_request import PutBotRequest, PutBotRequestDict
from ..models.put_bot_response import PutBotResponse
from ..models.put_intent_request import PutIntentRequest, PutIntentRequestDict
from ..models.put_intent_response import PutIntentResponse
from ..models.put_slot_type_request import PutSlotTypeRequest, PutSlotTypeRequestDict
from ..models.put_slot_type_response import PutSlotTypeResponse
from ..server.server import Server


class Versions:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = VersionsWithRawResponse(client, server, auth)

    def create_bot_version2(
        self,
        name: str,
        *,
        body: ModelsLexCreateBotVersionRequest | ModelsLexCreateBotVersionRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ModelsLexCreateBotVersionResponseAmazonLexModelBuildingV2VersionsApi:
        """Creates a new version of the bot based on the $LATEST version. If the $LATEST version of this resource hasn't
        changed since you created the last version, Amazon Lex doesn't create a new version. It returns the last created
        version. You can update only the $LATEST version of the bot. You can't update the numbered versions that you
        create with the CreateBotVersion operation. When you create the first version of a bot, Amazon Lex sets the
        version to 1. Subsequent versions increment by 1. For more information, see versioning-intro. This operation
        requires permission for the lex:CreateBotVersion action.

        Args:
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException
                NotFoundException PreconditionFailedException ``error`` is ``BadRequestException | NotFoundException |
                ConflictException | PreconditionFailedException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(self._with_raw_response.create_bot_version2(name, body=body, request_options=request_options))

    def create_intent_version(
        self,
        name: str,
        *,
        body: CreateIntentVersionRequest | CreateIntentVersionRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreateIntentVersionResponse:
        """Creates a new version of an intent based on the $LATEST version of the intent. If the $LATEST version of this
        intent hasn't changed since you last updated it, Amazon Lex doesn't create a new version. It returns the last
        version you created. You can update only the $LATEST version of the intent. You can't update the numbered
        versions that you create with the CreateIntentVersion operation. When you create a version of an intent, Amazon
        Lex sets the version to 1. Subsequent versions increment by 1. For more information, see versioning-intro. This
        operation requires permissions to perform the lex:CreateIntentVersion action.

        Args:
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException
                NotFoundException PreconditionFailedException ``error`` is ``BadRequestException | NotFoundException |
                ConflictException | PreconditionFailedException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(self._with_raw_response.create_intent_version(name, body=body, request_options=request_options))

    def create_slot_type_version(
        self,
        name: str,
        *,
        body: CreateSlotTypeVersionRequest | CreateSlotTypeVersionRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreateSlotTypeVersionResponse:
        """Creates a new version of a slot type based on the $LATEST version of the specified slot type. If the $LATEST
        version of this resource has not changed since the last version that you created, Amazon Lex doesn't create a
        new version. It returns the last version that you created. You can update only the $LATEST version of a slot
        type. You can't update the numbered versions that you create with the CreateSlotTypeVersion operation. When you
        create a version of a slot type, Amazon Lex sets the version to 1. Subsequent versions increment by 1. For more
        information, see versioning-intro. This operation requires permissions for the lex:CreateSlotTypeVersion action.

        Args:
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException
                NotFoundException PreconditionFailedException ``error`` is ``BadRequestException | NotFoundException |
                ConflictException | PreconditionFailedException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(
            self._with_raw_response.create_slot_type_version(name, body=body, request_options=request_options)
        )

    def delete_bot_version2(
        self,
        name: str,
        version: str,
        *,
        body: ModelsLexDeleteBotVersionRequest | ModelsLexDeleteBotVersionRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> str:
        """Deletes a specific version of a bot. To delete all versions of a bot, use the DeleteBot operation. This
        operation requires permissions for the lex:DeleteBotVersion action.

        Args:
            name: Value sent with the request.
            version: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException; ResourceInUseException ConflictException InternalFailureException
                LimitExceededException NotFoundException ``error`` is ``BadRequestException | NotFoundException |
                ConflictException | LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(
            self._with_raw_response.delete_bot_version2(name, version, body=body, request_options=request_options)
        )

    def delete_intent_version(
        self,
        name: str,
        version: str,
        *,
        body: DeleteIntentVersionRequest | DeleteIntentVersionRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> str:
        """Deletes a specific version of an intent. To delete all versions of a intent, use the DeleteIntent operation.
        This operation requires permissions for the lex:DeleteIntentVersion action.

        Args:
            name: Value sent with the request.
            version: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException; ResourceInUseException ConflictException InternalFailureException
                LimitExceededException NotFoundException ``error`` is ``BadRequestException | NotFoundException |
                ConflictException | LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(
            self._with_raw_response.delete_intent_version(name, version, body=body, request_options=request_options)
        )

    def delete_slot_type_version2(
        self,
        name: str,
        version: str,
        *,
        body: DeleteSlotTypeVersionRequest | DeleteSlotTypeVersionRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> str:
        """Deletes a specific version of a slot type. To delete all versions of a slot type, use the DeleteSlotType
        operation. This operation requires permissions for the lex:DeleteSlotTypeVersion action.

        Args:
            name: Value sent with the request.
            version: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException; ResourceInUseException ConflictException InternalFailureException
                LimitExceededException NotFoundException ``error`` is ``BadRequestException | NotFoundException |
                ConflictException | LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(
            self._with_raw_response.delete_slot_type_version2(name, version, body=body, request_options=request_options)
        )

    def get_bot(
        self, name: str, version_or_alias: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GetBotResponse:
        """Returns metadata information for a specific bot. You must provide the bot name and the bot version or alias.
        This operation requires permissions for the lex:GetBot action.

        Args:
            name: Value sent with the request.
            version_or_alias: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``BadRequestException | NotFoundException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(self._with_raw_response.get_bot(name, version_or_alias, request_options=request_options))

    def get_bot_versions(
        self, name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GetBotVersionsResponse:
        """Gets information about all of the versions of a bot. The GetBotVersions operation returns a BotMetadata
        object for each version of a bot. For example, if a bot has three numbered versions, the GetBotVersions
        operation returns four BotMetadata objects in the response, one for each numbered version and one for the
        $LATEST version. The GetBotVersions operation always returns at least one version, the $LATEST version. This
        operation requires permissions for the lex:GetBotVersions action.

        Args:
            name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``BadRequestException | NotFoundException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(self._with_raw_response.get_bot_versions(name, request_options=request_options))

    def get_intent(
        self, name: str, version: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GetIntentResponse:
        """Returns information about an intent. In addition to the intent name, you must specify the intent version.
        This operation requires permissions to perform the lex:GetIntent action.

        Args:
            name: Value sent with the request.
            version: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``BadRequestException | NotFoundException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(self._with_raw_response.get_intent(name, version, request_options=request_options))

    def get_intent_versions(
        self, name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GetIntentVersionsResponse:
        """Gets information about all of the versions of an intent. The GetIntentVersions operation returns an
        IntentMetadata object for each version of an intent. For example, if an intent has three numbered versions, the
        GetIntentVersions operation returns four IntentMetadata objects in the response, one for each numbered version
        and one for the $LATEST version. The GetIntentVersions operation always returns at least one version, the
        $LATEST version. This operation requires permissions for the lex:GetIntentVersions action.

        Args:
            name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``BadRequestException | NotFoundException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(self._with_raw_response.get_intent_versions(name, request_options=request_options))

    def get_slot_type(
        self, name: str, version: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GetSlotTypeResponse:
        """Returns information about a specific version of a slot type. In addition to specifying the slot type name,
        you must specify the slot type version. This operation requires permissions for the lex:GetSlotType action.

        Args:
            name: Value sent with the request.
            version: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``BadRequestException | NotFoundException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(self._with_raw_response.get_slot_type(name, version, request_options=request_options))

    def get_slot_type_versions(
        self, name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GetSlotTypeVersionsResponse:
        """Gets information about all versions of a slot type. The GetSlotTypeVersions operation returns a
        SlotTypeMetadata object for each version of a slot type. For example, if a slot type has three numbered
        versions, the GetSlotTypeVersions operation returns four SlotTypeMetadata objects in the response, one for each
        numbered version and one for the $LATEST version. The GetSlotTypeVersions operation always returns at least one
        version, the $LATEST version. This operation requires permissions for the lex:GetSlotTypeVersions action.

        Args:
            name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``BadRequestException | NotFoundException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(self._with_raw_response.get_slot_type_versions(name, request_options=request_options))

    def put_bot(
        self,
        name: str,
        *,
        body: PutBotRequest | PutBotRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PutBotResponse:
        """Creates an Amazon Lex conversational bot or replaces an existing bot. When you create or update a bot you are
        only required to specify a name, a locale, and whether the bot is directed toward children under age 13. You can
        use this to add intents later, or to remove intents from an existing bot. When you create a bot with the minimum
        information, the bot is created or updated but Amazon Lex returns the response FAILED. You can build the bot
        after you add one or more intents. For more information about Amazon Lex bots, see how-it-works. If you specify
        the name of an existing bot, the fields in the request replace the existing values in the $LATEST version of the
        bot. Amazon Lex removes any fields that you don't provide values for in the request, except for the
        idleTTLInSeconds and privacySettings fields, which are set to their default values. If you don't specify values
        for required fields, Amazon Lex throws an exception. This operation requires permissions for the lex:PutBot
        action. For more information, see security-iam.

        Args:
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException
                PreconditionFailedException ``error`` is ``BadRequestException | ConflictException |
                PreconditionFailedException | LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(self._with_raw_response.put_bot(name, body=body, request_options=request_options))

    def put_intent(
        self,
        name: str,
        *,
        body: PutIntentRequest | PutIntentRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PutIntentResponse:
        """Creates an intent or replaces an existing intent. To define the interaction between the user and your bot,
        you use one or more intents. For a pizza ordering bot, for example, you would create an OrderPizza intent. To
        create an intent or replace an existing intent, you must provide the following: Intent name. For example,
        OrderPizza. Sample utterances. For example, "Can I order a pizza, please." and "I want to order a pizza."
        Information to be gathered. You specify slot types for the information that your bot will request from the user.
        You can specify standard slot types, such as a date or a time, or custom slot types such as the size and crust
        of a pizza. How the intent will be fulfilled. You can provide a Lambda function or configure the intent to
        return the intent information to the client application. If you use a Lambda function, when all of the intent
        information is available, Amazon Lex invokes your Lambda function. If you configure your intent to return the
        intent information to the client application. You can specify other optional information in the request, such
        as: A confirmation prompt to ask the user to confirm an intent. For example, "Shall I order your pizza?" A con

        Args:
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException
                PreconditionFailedException ``error`` is ``BadRequestException | ConflictException |
                PreconditionFailedException | LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(self._with_raw_response.put_intent(name, body=body, request_options=request_options))

    def put_slot_type(
        self,
        name: str,
        *,
        body: PutSlotTypeRequest | PutSlotTypeRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PutSlotTypeResponse:
        """Creates a custom slot type or replaces an existing custom slot type. To create a custom slot type, specify a
        name for the slot type and a set of enumeration values, which are the values that a slot of this type can
        assume. For more information, see how-it-works. If you specify the name of an existing slot type, the fields in
        the request replace the existing values in the $LATEST version of the slot type. Amazon Lex removes the fields
        that you don't provide in the request. If you don't specify required fields, Amazon Lex throws an exception.
        When you update the $LATEST version of a slot type, if a bot uses the $LATEST version of an intent that contains
        the slot type, the bot's status field is set to NOT_BUILT. This operation requires permissions for the
        lex:PutSlotType action.

        Args:
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException
                PreconditionFailedException ``error`` is ``BadRequestException | ConflictException |
                PreconditionFailedException | LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(self._with_raw_response.put_slot_type(name, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> VersionsWithRawResponse:
        return self._with_raw_response


class AsyncVersions:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncVersionsWithRawResponse(client, server, auth)

    async def create_bot_version2(
        self,
        name: str,
        *,
        body: ModelsLexCreateBotVersionRequest | ModelsLexCreateBotVersionRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ModelsLexCreateBotVersionResponseAmazonLexModelBuildingV2VersionsApi:
        """Creates a new version of the bot based on the $LATEST version. If the $LATEST version of this resource hasn't
        changed since you created the last version, Amazon Lex doesn't create a new version. It returns the last created
        version. You can update only the $LATEST version of the bot. You can't update the numbered versions that you
        create with the CreateBotVersion operation. When you create the first version of a bot, Amazon Lex sets the
        version to 1. Subsequent versions increment by 1. For more information, see versioning-intro. This operation
        requires permission for the lex:CreateBotVersion action.

        Args:
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException
                NotFoundException PreconditionFailedException ``error`` is ``BadRequestException | NotFoundException |
                ConflictException | PreconditionFailedException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(
            await self._with_raw_response.create_bot_version2(name, body=body, request_options=request_options)
        )

    async def create_intent_version(
        self,
        name: str,
        *,
        body: CreateIntentVersionRequest | CreateIntentVersionRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreateIntentVersionResponse:
        """Creates a new version of an intent based on the $LATEST version of the intent. If the $LATEST version of this
        intent hasn't changed since you last updated it, Amazon Lex doesn't create a new version. It returns the last
        version you created. You can update only the $LATEST version of the intent. You can't update the numbered
        versions that you create with the CreateIntentVersion operation. When you create a version of an intent, Amazon
        Lex sets the version to 1. Subsequent versions increment by 1. For more information, see versioning-intro. This
        operation requires permissions to perform the lex:CreateIntentVersion action.

        Args:
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException
                NotFoundException PreconditionFailedException ``error`` is ``BadRequestException | NotFoundException |
                ConflictException | PreconditionFailedException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(
            await self._with_raw_response.create_intent_version(name, body=body, request_options=request_options)
        )

    async def create_slot_type_version(
        self,
        name: str,
        *,
        body: CreateSlotTypeVersionRequest | CreateSlotTypeVersionRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreateSlotTypeVersionResponse:
        """Creates a new version of a slot type based on the $LATEST version of the specified slot type. If the $LATEST
        version of this resource has not changed since the last version that you created, Amazon Lex doesn't create a
        new version. It returns the last version that you created. You can update only the $LATEST version of a slot
        type. You can't update the numbered versions that you create with the CreateSlotTypeVersion operation. When you
        create a version of a slot type, Amazon Lex sets the version to 1. Subsequent versions increment by 1. For more
        information, see versioning-intro. This operation requires permissions for the lex:CreateSlotTypeVersion action.

        Args:
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException
                NotFoundException PreconditionFailedException ``error`` is ``BadRequestException | NotFoundException |
                ConflictException | PreconditionFailedException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(
            await self._with_raw_response.create_slot_type_version(name, body=body, request_options=request_options)
        )

    async def delete_bot_version2(
        self,
        name: str,
        version: str,
        *,
        body: ModelsLexDeleteBotVersionRequest | ModelsLexDeleteBotVersionRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> str:
        """Deletes a specific version of a bot. To delete all versions of a bot, use the DeleteBot operation. This
        operation requires permissions for the lex:DeleteBotVersion action.

        Args:
            name: Value sent with the request.
            version: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException; ResourceInUseException ConflictException InternalFailureException
                LimitExceededException NotFoundException ``error`` is ``BadRequestException | NotFoundException |
                ConflictException | LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_bot_version2(name, version, body=body, request_options=request_options)
        )

    async def delete_intent_version(
        self,
        name: str,
        version: str,
        *,
        body: DeleteIntentVersionRequest | DeleteIntentVersionRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> str:
        """Deletes a specific version of an intent. To delete all versions of a intent, use the DeleteIntent operation.
        This operation requires permissions for the lex:DeleteIntentVersion action.

        Args:
            name: Value sent with the request.
            version: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException; ResourceInUseException ConflictException InternalFailureException
                LimitExceededException NotFoundException ``error`` is ``BadRequestException | NotFoundException |
                ConflictException | LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_intent_version(
                name, version, body=body, request_options=request_options
            ),
        )

    async def delete_slot_type_version2(
        self,
        name: str,
        version: str,
        *,
        body: DeleteSlotTypeVersionRequest | DeleteSlotTypeVersionRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> str:
        """Deletes a specific version of a slot type. To delete all versions of a slot type, use the DeleteSlotType
        operation. This operation requires permissions for the lex:DeleteSlotTypeVersion action.

        Args:
            name: Value sent with the request.
            version: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException; ResourceInUseException ConflictException InternalFailureException
                LimitExceededException NotFoundException ``error`` is ``BadRequestException | NotFoundException |
                ConflictException | LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_slot_type_version2(
                name, version, body=body, request_options=request_options
            ),
        )

    async def get_bot(
        self, name: str, version_or_alias: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetBotResponse:
        """Returns metadata information for a specific bot. You must provide the bot name and the bot version or alias.
        This operation requires permissions for the lex:GetBot action.

        Args:
            name: Value sent with the request.
            version_or_alias: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``BadRequestException | NotFoundException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(await self._with_raw_response.get_bot(name, version_or_alias, request_options=request_options))

    async def get_bot_versions(
        self, name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetBotVersionsResponse:
        """Gets information about all of the versions of a bot. The GetBotVersions operation returns a BotMetadata
        object for each version of a bot. For example, if a bot has three numbered versions, the GetBotVersions
        operation returns four BotMetadata objects in the response, one for each numbered version and one for the
        $LATEST version. The GetBotVersions operation always returns at least one version, the $LATEST version. This
        operation requires permissions for the lex:GetBotVersions action.

        Args:
            name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``BadRequestException | NotFoundException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(await self._with_raw_response.get_bot_versions(name, request_options=request_options))

    async def get_intent(
        self, name: str, version: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetIntentResponse:
        """Returns information about an intent. In addition to the intent name, you must specify the intent version.
        This operation requires permissions to perform the lex:GetIntent action.

        Args:
            name: Value sent with the request.
            version: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``BadRequestException | NotFoundException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(await self._with_raw_response.get_intent(name, version, request_options=request_options))

    async def get_intent_versions(
        self, name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetIntentVersionsResponse:
        """Gets information about all of the versions of an intent. The GetIntentVersions operation returns an
        IntentMetadata object for each version of an intent. For example, if an intent has three numbered versions, the
        GetIntentVersions operation returns four IntentMetadata objects in the response, one for each numbered version
        and one for the $LATEST version. The GetIntentVersions operation always returns at least one version, the
        $LATEST version. This operation requires permissions for the lex:GetIntentVersions action.

        Args:
            name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``BadRequestException | NotFoundException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(await self._with_raw_response.get_intent_versions(name, request_options=request_options))

    async def get_slot_type(
        self, name: str, version: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetSlotTypeResponse:
        """Returns information about a specific version of a slot type. In addition to specifying the slot type name,
        you must specify the slot type version. This operation requires permissions for the lex:GetSlotType action.

        Args:
            name: Value sent with the request.
            version: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``BadRequestException | NotFoundException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(await self._with_raw_response.get_slot_type(name, version, request_options=request_options))

    async def get_slot_type_versions(
        self, name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetSlotTypeVersionsResponse:
        """Gets information about all versions of a slot type. The GetSlotTypeVersions operation returns a
        SlotTypeMetadata object for each version of a slot type. For example, if a slot type has three numbered
        versions, the GetSlotTypeVersions operation returns four SlotTypeMetadata objects in the response, one for each
        numbered version and one for the $LATEST version. The GetSlotTypeVersions operation always returns at least one
        version, the $LATEST version. This operation requires permissions for the lex:GetSlotTypeVersions action.

        Args:
            name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``BadRequestException | NotFoundException | LimitExceededException | InternalFailureException |
                RawError``."""
        return unwrap(await self._with_raw_response.get_slot_type_versions(name, request_options=request_options))

    async def put_bot(
        self,
        name: str,
        *,
        body: PutBotRequest | PutBotRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PutBotResponse:
        """Creates an Amazon Lex conversational bot or replaces an existing bot. When you create or update a bot you are
        only required to specify a name, a locale, and whether the bot is directed toward children under age 13. You can
        use this to add intents later, or to remove intents from an existing bot. When you create a bot with the minimum
        information, the bot is created or updated but Amazon Lex returns the response FAILED. You can build the bot
        after you add one or more intents. For more information about Amazon Lex bots, see how-it-works. If you specify
        the name of an existing bot, the fields in the request replace the existing values in the $LATEST version of the
        bot. Amazon Lex removes any fields that you don't provide values for in the request, except for the
        idleTTLInSeconds and privacySettings fields, which are set to their default values. If you don't specify values
        for required fields, Amazon Lex throws an exception. This operation requires permissions for the lex:PutBot
        action. For more information, see security-iam.

        Args:
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException
                PreconditionFailedException ``error`` is ``BadRequestException | ConflictException |
                PreconditionFailedException | LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(await self._with_raw_response.put_bot(name, body=body, request_options=request_options))

    async def put_intent(
        self,
        name: str,
        *,
        body: PutIntentRequest | PutIntentRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PutIntentResponse:
        """Creates an intent or replaces an existing intent. To define the interaction between the user and your bot,
        you use one or more intents. For a pizza ordering bot, for example, you would create an OrderPizza intent. To
        create an intent or replace an existing intent, you must provide the following: Intent name. For example,
        OrderPizza. Sample utterances. For example, "Can I order a pizza, please." and "I want to order a pizza."
        Information to be gathered. You specify slot types for the information that your bot will request from the user.
        You can specify standard slot types, such as a date or a time, or custom slot types such as the size and crust
        of a pizza. How the intent will be fulfilled. You can provide a Lambda function or configure the intent to
        return the intent information to the client application. If you use a Lambda function, when all of the intent
        information is available, Amazon Lex invokes your Lambda function. If you configure your intent to return the
        intent information to the client application. You can specify other optional information in the request, such
        as: A confirmation prompt to ask the user to confirm an intent. For example, "Shall I order your pizza?" A con

        Args:
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException
                PreconditionFailedException ``error`` is ``BadRequestException | ConflictException |
                PreconditionFailedException | LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(await self._with_raw_response.put_intent(name, body=body, request_options=request_options))

    async def put_slot_type(
        self,
        name: str,
        *,
        body: PutSlotTypeRequest | PutSlotTypeRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PutSlotTypeResponse:
        """Creates a custom slot type or replaces an existing custom slot type. To create a custom slot type, specify a
        name for the slot type and a set of enumeration values, which are the values that a slot of this type can
        assume. For more information, see how-it-works. If you specify the name of an existing slot type, the fields in
        the request replace the existing values in the $LATEST version of the slot type. Amazon Lex removes the fields
        that you don't provide in the request. If you don't specify required fields, Amazon Lex throws an exception.
        When you update the $LATEST version of a slot type, if a bot uses the $LATEST version of an intent that contains
        the slot type, the bot's status field is set to NOT_BUILT. This operation requires permissions for the
        lex:PutSlotType action.

        Args:
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException
                PreconditionFailedException ``error`` is ``BadRequestException | ConflictException |
                PreconditionFailedException | LimitExceededException | InternalFailureException | RawError``."""
        return unwrap(await self._with_raw_response.put_slot_type(name, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncVersionsWithRawResponse:
        return self._with_raw_response


class VersionsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_bot_version2(
        self,
        name: str,
        *,
        body: ModelsLexCreateBotVersionRequest | ModelsLexCreateBotVersionRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ModelsLexCreateBotVersionResponseAmazonLexModelBuildingV2VersionsApi, CreateBotVersion2ErrorBody]:
        """Creates a new version of the bot based on the $LATEST version. If the $LATEST version of this resource hasn't
        changed since you created the last version, Amazon Lex doesn't create a new version. It returns the last created
        version. You can update only the $LATEST version of the bot. You can't update the numbered versions that you
        create with the CreateBotVersion operation. When you create the first version of a bot, Amazon Lex sets the
        version to 1. Subsequent versions increment by 1. For more information, see versioning-intro. This operation
        requires permission for the lex:CreateBotVersion action.

        Args:
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/bots/{name}/versions"),
            path_params=[param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ModelsLexCreateBotVersionRequest | ModelsLexCreateBotVersionRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ModelsLexCreateBotVersionResponseAmazonLexModelBuildingV2VersionsApi],
            error_mapper=create_bot_version2_error_mapper,
            request_options=request_options,
        )

    def create_intent_version(
        self,
        name: str,
        *,
        body: CreateIntentVersionRequest | CreateIntentVersionRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateIntentVersionResponse, CreateIntentVersionErrorBody]:
        """Creates a new version of an intent based on the $LATEST version of the intent. If the $LATEST version of this
        intent hasn't changed since you last updated it, Amazon Lex doesn't create a new version. It returns the last
        version you created. You can update only the $LATEST version of the intent. You can't update the numbered
        versions that you create with the CreateIntentVersion operation. When you create a version of an intent, Amazon
        Lex sets the version to 1. Subsequent versions increment by 1. For more information, see versioning-intro. This
        operation requires permissions to perform the lex:CreateIntentVersion action.

        Args:
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/intents/{name}/versions"),
            path_params=[param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateIntentVersionRequest | CreateIntentVersionRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[CreateIntentVersionResponse],
            error_mapper=create_intent_version_error_mapper,
            request_options=request_options,
        )

    def create_slot_type_version(
        self,
        name: str,
        *,
        body: CreateSlotTypeVersionRequest | CreateSlotTypeVersionRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateSlotTypeVersionResponse, CreateSlotTypeVersionErrorBody]:
        """Creates a new version of a slot type based on the $LATEST version of the specified slot type. If the $LATEST
        version of this resource has not changed since the last version that you created, Amazon Lex doesn't create a
        new version. It returns the last version that you created. You can update only the $LATEST version of a slot
        type. You can't update the numbered versions that you create with the CreateSlotTypeVersion operation. When you
        create a version of a slot type, Amazon Lex sets the version to 1. Subsequent versions increment by 1. For more
        information, see versioning-intro. This operation requires permissions for the lex:CreateSlotTypeVersion action.

        Args:
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/slottypes/{name}/versions"),
            path_params=[param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateSlotTypeVersionRequest | CreateSlotTypeVersionRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[CreateSlotTypeVersionResponse],
            error_mapper=create_slot_type_version_error_mapper,
            request_options=request_options,
        )

    def delete_bot_version2(
        self,
        name: str,
        version: str,
        *,
        body: ModelsLexDeleteBotVersionRequest | ModelsLexDeleteBotVersionRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[str, DeleteBotVersion2ErrorBody]:
        """Deletes a specific version of a bot. To delete all versions of a bot, use the DeleteBot operation. This
        operation requires permissions for the lex:DeleteBotVersion action.

        Args:
            name: Value sent with the request.
            version: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/bots/{name}/versions/{version}"),
            path_params=[param[str]("name", name), param[str]("version", version)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ModelsLexDeleteBotVersionRequest | ModelsLexDeleteBotVersionRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[str],
            error_mapper=delete_bot_version2_error_mapper,
            request_options=request_options,
        )

    def delete_intent_version(
        self,
        name: str,
        version: str,
        *,
        body: DeleteIntentVersionRequest | DeleteIntentVersionRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[str, DeleteIntentVersionErrorBody]:
        """Deletes a specific version of an intent. To delete all versions of a intent, use the DeleteIntent operation.
        This operation requires permissions for the lex:DeleteIntentVersion action.

        Args:
            name: Value sent with the request.
            version: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/intents/{name}/versions/{version}"),
            path_params=[param[str]("name", name), param[str]("version", version)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteIntentVersionRequest | DeleteIntentVersionRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[str],
            error_mapper=delete_intent_version_error_mapper,
            request_options=request_options,
        )

    def delete_slot_type_version2(
        self,
        name: str,
        version: str,
        *,
        body: DeleteSlotTypeVersionRequest | DeleteSlotTypeVersionRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[str, DeleteSlotTypeVersion2ErrorBody]:
        """Deletes a specific version of a slot type. To delete all versions of a slot type, use the DeleteSlotType
        operation. This operation requires permissions for the lex:DeleteSlotTypeVersion action.

        Args:
            name: Value sent with the request.
            version: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/slottypes/{name}/version/{version}"),
            path_params=[param[str]("name", name), param[str]("version", version)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteSlotTypeVersionRequest | DeleteSlotTypeVersionRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[str],
            error_mapper=delete_slot_type_version2_error_mapper,
            request_options=request_options,
        )

    def get_bot(
        self, name: str, version_or_alias: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetBotResponse, GetBotErrorBody]:
        """Returns metadata information for a specific bot. You must provide the bot name and the bot version or alias.
        This operation requires permissions for the lex:GetBot action.

        Args:
            name: Value sent with the request.
            version_or_alias: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/bots/{name}/versions/{versionOrAlias}"),
            path_params=[param[str]("name", name), param[str]("versionOrAlias", version_or_alias)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetBotResponse],
            error_mapper=get_bot_error_mapper,
            request_options=request_options,
        )

    def get_bot_versions(
        self, name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetBotVersionsResponse, GetBotVersionsErrorBody]:
        """Gets information about all of the versions of a bot. The GetBotVersions operation returns a BotMetadata
        object for each version of a bot. For example, if a bot has three numbered versions, the GetBotVersions
        operation returns four BotMetadata objects in the response, one for each numbered version and one for the
        $LATEST version. The GetBotVersions operation always returns at least one version, the $LATEST version. This
        operation requires permissions for the lex:GetBotVersions action.

        Args:
            name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/bots/{name}/versions"),
            path_params=[param[str]("name", name)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetBotVersionsResponse],
            error_mapper=get_bot_versions_error_mapper,
            request_options=request_options,
        )

    def get_intent(
        self, name: str, version: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetIntentResponse, GetIntentErrorBody]:
        """Returns information about an intent. In addition to the intent name, you must specify the intent version.
        This operation requires permissions to perform the lex:GetIntent action.

        Args:
            name: Value sent with the request.
            version: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/intents/{name}/versions/{version}"),
            path_params=[param[str]("name", name), param[str]("version", version)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetIntentResponse],
            error_mapper=get_intent_error_mapper,
            request_options=request_options,
        )

    def get_intent_versions(
        self, name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetIntentVersionsResponse, GetIntentVersionsErrorBody]:
        """Gets information about all of the versions of an intent. The GetIntentVersions operation returns an
        IntentMetadata object for each version of an intent. For example, if an intent has three numbered versions, the
        GetIntentVersions operation returns four IntentMetadata objects in the response, one for each numbered version
        and one for the $LATEST version. The GetIntentVersions operation always returns at least one version, the
        $LATEST version. This operation requires permissions for the lex:GetIntentVersions action.

        Args:
            name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/intents/{name}/versions"),
            path_params=[param[str]("name", name)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetIntentVersionsResponse],
            error_mapper=get_intent_versions_error_mapper,
            request_options=request_options,
        )

    def get_slot_type(
        self, name: str, version: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetSlotTypeResponse, GetSlotTypeErrorBody]:
        """Returns information about a specific version of a slot type. In addition to specifying the slot type name,
        you must specify the slot type version. This operation requires permissions for the lex:GetSlotType action.

        Args:
            name: Value sent with the request.
            version: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/slottypes/{name}/versions/{version}"),
            path_params=[param[str]("name", name), param[str]("version", version)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetSlotTypeResponse],
            error_mapper=get_slot_type_error_mapper,
            request_options=request_options,
        )

    def get_slot_type_versions(
        self, name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetSlotTypeVersionsResponse, GetSlotTypeVersionsErrorBody]:
        """Gets information about all versions of a slot type. The GetSlotTypeVersions operation returns a
        SlotTypeMetadata object for each version of a slot type. For example, if a slot type has three numbered
        versions, the GetSlotTypeVersions operation returns four SlotTypeMetadata objects in the response, one for each
        numbered version and one for the $LATEST version. The GetSlotTypeVersions operation always returns at least one
        version, the $LATEST version. This operation requires permissions for the lex:GetSlotTypeVersions action.

        Args:
            name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/slottypes/{name}/versions"),
            path_params=[param[str]("name", name)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetSlotTypeVersionsResponse],
            error_mapper=get_slot_type_versions_error_mapper,
            request_options=request_options,
        )

    def put_bot(
        self,
        name: str,
        *,
        body: PutBotRequest | PutBotRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PutBotResponse, PutBotErrorBody]:
        """Creates an Amazon Lex conversational bot or replaces an existing bot. When you create or update a bot you are
        only required to specify a name, a locale, and whether the bot is directed toward children under age 13. You can
        use this to add intents later, or to remove intents from an existing bot. When you create a bot with the minimum
        information, the bot is created or updated but Amazon Lex returns the response FAILED. You can build the bot
        after you add one or more intents. For more information about Amazon Lex bots, see how-it-works. If you specify
        the name of an existing bot, the fields in the request replace the existing values in the $LATEST version of the
        bot. Amazon Lex removes any fields that you don't provide values for in the request, except for the
        idleTTLInSeconds and privacySettings fields, which are set to their default values. If you don't specify values
        for required fields, Amazon Lex throws an exception. This operation requires permissions for the lex:PutBot
        action. For more information, see security-iam.

        Args:
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/bots/{name}/versions/$LATEST"),
            path_params=[param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PutBotRequest | PutBotRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[PutBotResponse],
            error_mapper=put_bot_error_mapper,
            request_options=request_options,
        )

    def put_intent(
        self,
        name: str,
        *,
        body: PutIntentRequest | PutIntentRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PutIntentResponse, PutIntentErrorBody]:
        """Creates an intent or replaces an existing intent. To define the interaction between the user and your bot,
        you use one or more intents. For a pizza ordering bot, for example, you would create an OrderPizza intent. To
        create an intent or replace an existing intent, you must provide the following: Intent name. For example,
        OrderPizza. Sample utterances. For example, "Can I order a pizza, please." and "I want to order a pizza."
        Information to be gathered. You specify slot types for the information that your bot will request from the user.
        You can specify standard slot types, such as a date or a time, or custom slot types such as the size and crust
        of a pizza. How the intent will be fulfilled. You can provide a Lambda function or configure the intent to
        return the intent information to the client application. If you use a Lambda function, when all of the intent
        information is available, Amazon Lex invokes your Lambda function. If you configure your intent to return the
        intent information to the client application. You can specify other optional information in the request, such
        as: A confirmation prompt to ask the user to confirm an intent. For example, "Shall I order your pizza?" A con

        Args:
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/intents/{name}/versions/$LATEST"),
            path_params=[param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PutIntentRequest | PutIntentRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[PutIntentResponse],
            error_mapper=put_intent_error_mapper,
            request_options=request_options,
        )

    def put_slot_type(
        self,
        name: str,
        *,
        body: PutSlotTypeRequest | PutSlotTypeRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PutSlotTypeResponse, PutSlotTypeErrorBody]:
        """Creates a custom slot type or replaces an existing custom slot type. To create a custom slot type, specify a
        name for the slot type and a set of enumeration values, which are the values that a slot of this type can
        assume. For more information, see how-it-works. If you specify the name of an existing slot type, the fields in
        the request replace the existing values in the $LATEST version of the slot type. Amazon Lex removes the fields
        that you don't provide in the request. If you don't specify required fields, Amazon Lex throws an exception.
        When you update the $LATEST version of a slot type, if a bot uses the $LATEST version of an intent that contains
        the slot type, the bot's status field is set to NOT_BUILT. This operation requires permissions for the
        lex:PutSlotType action.

        Args:
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/slottypes/{name}/versions/$LATEST"),
            path_params=[param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PutSlotTypeRequest | PutSlotTypeRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[PutSlotTypeResponse],
            error_mapper=put_slot_type_error_mapper,
            request_options=request_options,
        )


class AsyncVersionsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_bot_version2(
        self,
        name: str,
        *,
        body: ModelsLexCreateBotVersionRequest | ModelsLexCreateBotVersionRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ModelsLexCreateBotVersionResponseAmazonLexModelBuildingV2VersionsApi, CreateBotVersion2ErrorBody]:
        """Creates a new version of the bot based on the $LATEST version. If the $LATEST version of this resource hasn't
        changed since you created the last version, Amazon Lex doesn't create a new version. It returns the last created
        version. You can update only the $LATEST version of the bot. You can't update the numbered versions that you
        create with the CreateBotVersion operation. When you create the first version of a bot, Amazon Lex sets the
        version to 1. Subsequent versions increment by 1. For more information, see versioning-intro. This operation
        requires permission for the lex:CreateBotVersion action.

        Args:
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/bots/{name}/versions"),
            path_params=[param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ModelsLexCreateBotVersionRequest | ModelsLexCreateBotVersionRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ModelsLexCreateBotVersionResponseAmazonLexModelBuildingV2VersionsApi],
            error_mapper=create_bot_version2_error_mapper,
            request_options=request_options,
        )

    async def create_intent_version(
        self,
        name: str,
        *,
        body: CreateIntentVersionRequest | CreateIntentVersionRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateIntentVersionResponse, CreateIntentVersionErrorBody]:
        """Creates a new version of an intent based on the $LATEST version of the intent. If the $LATEST version of this
        intent hasn't changed since you last updated it, Amazon Lex doesn't create a new version. It returns the last
        version you created. You can update only the $LATEST version of the intent. You can't update the numbered
        versions that you create with the CreateIntentVersion operation. When you create a version of an intent, Amazon
        Lex sets the version to 1. Subsequent versions increment by 1. For more information, see versioning-intro. This
        operation requires permissions to perform the lex:CreateIntentVersion action.

        Args:
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/intents/{name}/versions"),
            path_params=[param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateIntentVersionRequest | CreateIntentVersionRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[CreateIntentVersionResponse],
            error_mapper=create_intent_version_error_mapper,
            request_options=request_options,
        )

    async def create_slot_type_version(
        self,
        name: str,
        *,
        body: CreateSlotTypeVersionRequest | CreateSlotTypeVersionRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateSlotTypeVersionResponse, CreateSlotTypeVersionErrorBody]:
        """Creates a new version of a slot type based on the $LATEST version of the specified slot type. If the $LATEST
        version of this resource has not changed since the last version that you created, Amazon Lex doesn't create a
        new version. It returns the last version that you created. You can update only the $LATEST version of a slot
        type. You can't update the numbered versions that you create with the CreateSlotTypeVersion operation. When you
        create a version of a slot type, Amazon Lex sets the version to 1. Subsequent versions increment by 1. For more
        information, see versioning-intro. This operation requires permissions for the lex:CreateSlotTypeVersion action.

        Args:
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/slottypes/{name}/versions"),
            path_params=[param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateSlotTypeVersionRequest | CreateSlotTypeVersionRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[CreateSlotTypeVersionResponse],
            error_mapper=create_slot_type_version_error_mapper,
            request_options=request_options,
        )

    async def delete_bot_version2(
        self,
        name: str,
        version: str,
        *,
        body: ModelsLexDeleteBotVersionRequest | ModelsLexDeleteBotVersionRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[str, DeleteBotVersion2ErrorBody]:
        """Deletes a specific version of a bot. To delete all versions of a bot, use the DeleteBot operation. This
        operation requires permissions for the lex:DeleteBotVersion action.

        Args:
            name: Value sent with the request.
            version: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/bots/{name}/versions/{version}"),
            path_params=[param[str]("name", name), param[str]("version", version)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ModelsLexDeleteBotVersionRequest | ModelsLexDeleteBotVersionRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[str],
            error_mapper=delete_bot_version2_error_mapper,
            request_options=request_options,
        )

    async def delete_intent_version(
        self,
        name: str,
        version: str,
        *,
        body: DeleteIntentVersionRequest | DeleteIntentVersionRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[str, DeleteIntentVersionErrorBody]:
        """Deletes a specific version of an intent. To delete all versions of a intent, use the DeleteIntent operation.
        This operation requires permissions for the lex:DeleteIntentVersion action.

        Args:
            name: Value sent with the request.
            version: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/intents/{name}/versions/{version}"),
            path_params=[param[str]("name", name), param[str]("version", version)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteIntentVersionRequest | DeleteIntentVersionRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[str],
            error_mapper=delete_intent_version_error_mapper,
            request_options=request_options,
        )

    async def delete_slot_type_version2(
        self,
        name: str,
        version: str,
        *,
        body: DeleteSlotTypeVersionRequest | DeleteSlotTypeVersionRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[str, DeleteSlotTypeVersion2ErrorBody]:
        """Deletes a specific version of a slot type. To delete all versions of a slot type, use the DeleteSlotType
        operation. This operation requires permissions for the lex:DeleteSlotTypeVersion action.

        Args:
            name: Value sent with the request.
            version: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/slottypes/{name}/version/{version}"),
            path_params=[param[str]("name", name), param[str]("version", version)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteSlotTypeVersionRequest | DeleteSlotTypeVersionRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[str],
            error_mapper=delete_slot_type_version2_error_mapper,
            request_options=request_options,
        )

    async def get_bot(
        self, name: str, version_or_alias: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetBotResponse, GetBotErrorBody]:
        """Returns metadata information for a specific bot. You must provide the bot name and the bot version or alias.
        This operation requires permissions for the lex:GetBot action.

        Args:
            name: Value sent with the request.
            version_or_alias: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/bots/{name}/versions/{versionOrAlias}"),
            path_params=[param[str]("name", name), param[str]("versionOrAlias", version_or_alias)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetBotResponse],
            error_mapper=get_bot_error_mapper,
            request_options=request_options,
        )

    async def get_bot_versions(
        self, name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetBotVersionsResponse, GetBotVersionsErrorBody]:
        """Gets information about all of the versions of a bot. The GetBotVersions operation returns a BotMetadata
        object for each version of a bot. For example, if a bot has three numbered versions, the GetBotVersions
        operation returns four BotMetadata objects in the response, one for each numbered version and one for the
        $LATEST version. The GetBotVersions operation always returns at least one version, the $LATEST version. This
        operation requires permissions for the lex:GetBotVersions action.

        Args:
            name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/bots/{name}/versions"),
            path_params=[param[str]("name", name)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetBotVersionsResponse],
            error_mapper=get_bot_versions_error_mapper,
            request_options=request_options,
        )

    async def get_intent(
        self, name: str, version: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetIntentResponse, GetIntentErrorBody]:
        """Returns information about an intent. In addition to the intent name, you must specify the intent version.
        This operation requires permissions to perform the lex:GetIntent action.

        Args:
            name: Value sent with the request.
            version: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/intents/{name}/versions/{version}"),
            path_params=[param[str]("name", name), param[str]("version", version)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetIntentResponse],
            error_mapper=get_intent_error_mapper,
            request_options=request_options,
        )

    async def get_intent_versions(
        self, name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetIntentVersionsResponse, GetIntentVersionsErrorBody]:
        """Gets information about all of the versions of an intent. The GetIntentVersions operation returns an
        IntentMetadata object for each version of an intent. For example, if an intent has three numbered versions, the
        GetIntentVersions operation returns four IntentMetadata objects in the response, one for each numbered version
        and one for the $LATEST version. The GetIntentVersions operation always returns at least one version, the
        $LATEST version. This operation requires permissions for the lex:GetIntentVersions action.

        Args:
            name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/intents/{name}/versions"),
            path_params=[param[str]("name", name)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetIntentVersionsResponse],
            error_mapper=get_intent_versions_error_mapper,
            request_options=request_options,
        )

    async def get_slot_type(
        self, name: str, version: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetSlotTypeResponse, GetSlotTypeErrorBody]:
        """Returns information about a specific version of a slot type. In addition to specifying the slot type name,
        you must specify the slot type version. This operation requires permissions for the lex:GetSlotType action.

        Args:
            name: Value sent with the request.
            version: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/slottypes/{name}/versions/{version}"),
            path_params=[param[str]("name", name), param[str]("version", version)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetSlotTypeResponse],
            error_mapper=get_slot_type_error_mapper,
            request_options=request_options,
        )

    async def get_slot_type_versions(
        self, name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetSlotTypeVersionsResponse, GetSlotTypeVersionsErrorBody]:
        """Gets information about all versions of a slot type. The GetSlotTypeVersions operation returns a
        SlotTypeMetadata object for each version of a slot type. For example, if a slot type has three numbered
        versions, the GetSlotTypeVersions operation returns four SlotTypeMetadata objects in the response, one for each
        numbered version and one for the $LATEST version. The GetSlotTypeVersions operation always returns at least one
        version, the $LATEST version. This operation requires permissions for the lex:GetSlotTypeVersions action.

        Args:
            name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/slottypes/{name}/versions"),
            path_params=[param[str]("name", name)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetSlotTypeVersionsResponse],
            error_mapper=get_slot_type_versions_error_mapper,
            request_options=request_options,
        )

    async def put_bot(
        self,
        name: str,
        *,
        body: PutBotRequest | PutBotRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PutBotResponse, PutBotErrorBody]:
        """Creates an Amazon Lex conversational bot or replaces an existing bot. When you create or update a bot you are
        only required to specify a name, a locale, and whether the bot is directed toward children under age 13. You can
        use this to add intents later, or to remove intents from an existing bot. When you create a bot with the minimum
        information, the bot is created or updated but Amazon Lex returns the response FAILED. You can build the bot
        after you add one or more intents. For more information about Amazon Lex bots, see how-it-works. If you specify
        the name of an existing bot, the fields in the request replace the existing values in the $LATEST version of the
        bot. Amazon Lex removes any fields that you don't provide values for in the request, except for the
        idleTTLInSeconds and privacySettings fields, which are set to their default values. If you don't specify values
        for required fields, Amazon Lex throws an exception. This operation requires permissions for the lex:PutBot
        action. For more information, see security-iam.

        Args:
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/bots/{name}/versions/$LATEST"),
            path_params=[param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PutBotRequest | PutBotRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[PutBotResponse],
            error_mapper=put_bot_error_mapper,
            request_options=request_options,
        )

    async def put_intent(
        self,
        name: str,
        *,
        body: PutIntentRequest | PutIntentRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PutIntentResponse, PutIntentErrorBody]:
        """Creates an intent or replaces an existing intent. To define the interaction between the user and your bot,
        you use one or more intents. For a pizza ordering bot, for example, you would create an OrderPizza intent. To
        create an intent or replace an existing intent, you must provide the following: Intent name. For example,
        OrderPizza. Sample utterances. For example, "Can I order a pizza, please." and "I want to order a pizza."
        Information to be gathered. You specify slot types for the information that your bot will request from the user.
        You can specify standard slot types, such as a date or a time, or custom slot types such as the size and crust
        of a pizza. How the intent will be fulfilled. You can provide a Lambda function or configure the intent to
        return the intent information to the client application. If you use a Lambda function, when all of the intent
        information is available, Amazon Lex invokes your Lambda function. If you configure your intent to return the
        intent information to the client application. You can specify other optional information in the request, such
        as: A confirmation prompt to ask the user to confirm an intent. For example, "Shall I order your pizza?" A con

        Args:
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/intents/{name}/versions/$LATEST"),
            path_params=[param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PutIntentRequest | PutIntentRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[PutIntentResponse],
            error_mapper=put_intent_error_mapper,
            request_options=request_options,
        )

    async def put_slot_type(
        self,
        name: str,
        *,
        body: PutSlotTypeRequest | PutSlotTypeRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PutSlotTypeResponse, PutSlotTypeErrorBody]:
        """Creates a custom slot type or replaces an existing custom slot type. To create a custom slot type, specify a
        name for the slot type and a set of enumeration values, which are the values that a slot of this type can
        assume. For more information, see how-it-works. If you specify the name of an existing slot type, the fields in
        the request replace the existing values in the $LATEST version of the slot type. Amazon Lex removes the fields
        that you don't provide in the request. If you don't specify required fields, Amazon Lex throws an exception.
        When you update the $LATEST version of a slot type, if a bot uses the $LATEST version of an intent that contains
        the slot type, the bot's status field is set to NOT_BUILT. This operation requires permissions for the
        lex:PutSlotType action.

        Args:
            name: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/slottypes/{name}/versions/$LATEST"),
            path_params=[param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PutSlotTypeRequest | PutSlotTypeRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[PutSlotTypeResponse],
            error_mapper=put_slot_type_error_mapper,
            request_options=request_options,
        )
