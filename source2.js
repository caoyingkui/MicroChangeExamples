var data2 = [
	{
		"linetupleid" : 1,
		"linenumber" : 33,
		"changeype" : "REMOVING_ATTRIBUTE_MODIFIABILITY",
		"changeentity" : "MODIFIER",
		"changecontent" : "final",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 3,
		"linenumber" : 26,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 4,
		"linenumber" : 66,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 5,
		"linenumber" : 36,
		"changeype" : "PARENT_CLASS_CHANGE",
		"changeentity" : "PARAMETERIZED_TYPE",
		"changecontent" : "ReferenceMap<K, V>]AbstractReferenceCache<K, V>",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 9,
		"linenumber" : 446,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "private",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 11,
		"linenumber" : 76,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "factories.put(Key.newInstance(Container.class, Container.DEFAULT_NAME), CONTAINER_FACTORY);]factories.put(Key.newInstance(Container.class, Key.DEFAULT_NAME), CONTAINER_FACTORY);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 13,
		"linenumber" : 164,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "factory(type, Container.DEFAULT_NAME, factory, scope);]factory(type, Key.DEFAULT_NAME, factory, scope);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 21,
		"linenumber" : 523,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "getInstance(type, DEFAULT_NAME, context);]getInstance(type, Key.DEFAULT_NAME, context);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 22,
		"linenumber" : 41,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "key.getType();]key.getRawType();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 24,
		"linenumber" : 117,
		"changeype" : "ADDITIONAL_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "com.google.inject.Key.getRawType()",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 27,
		"linenumber" : 86,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "hashCode;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 27,
		"linenumber" : 139,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "typeString.hashCode();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 28,
		"linenumber" : 97,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(name.equals(other.name) && type.equals(other.type));](name.equals(other.name) && typeString.equals(other.typeString));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 29,
		"linenumber" : 101,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((((\"[type=\" + type.getName()) + \", name=\\\'\") + name) + \"\\\']\");]((((\"Key[type=\" + typeString) + \", name=\\\'\") + name) + \"\\\']\");",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 33,
		"linenumber" : 92,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "final InternalFactory<? extends T> scopedFactory = scope.scopeFactory(key.getType(), key.getName(), factory);]final InternalFactory<? extends T> scopedFactory = scope.scopeFactory(key.getRawType(), key.getName(), factory);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 35,
		"linenumber" : 38,
		"changeype" : "REMOVED_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "com.google.inject.Key.typeString : String",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 35,
		"linenumber" : 46,
		"changeype" : "ADDITIONAL_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "com.google.inject.Key.typeToken : TypeToken<T>",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 36,
		"linenumber" : 39,
		"changeype" : "REMOVED_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "com.google.inject.Key.type : Type",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 36,
		"linenumber" : 47,
		"changeype" : "ADDITIONAL_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "com.google.inject.Key.hashCode : int",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 38,
		"linenumber" : 120,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 39,
		"linenumber" : 102,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "typeToken;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 39,
		"linenumber" : 121,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "rawType;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 40,
		"linenumber" : 113,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "this.hashCode;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 40,
		"linenumber" : 139,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "typeString.hashCode();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 42,
		"linenumber" : 160,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! (o instanceof Key))](! (o instanceof Key<?>))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 43,
		"linenumber" : 163,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Key other = (Key) o;]Key<?> other = (Key<?>) o;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 44,
		"linenumber" : 164,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(name.equals(other.name) && typeString.equals(other.typeString));](name.equals(other.name) && typeToken.equals(other.typeToken));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 45,
		"linenumber" : 171,
		"changeype" : "REMOVED_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "com.google.inject.Key.newInstance(Class<T>)",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 46,
		"linenumber" : 155,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new ManualKey<Object>(type, DEFAULT_NAME);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 49,
		"linenumber" : 165,
		"changeype" : "ADDITIONAL_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "com.google.inject.Key.get(TypeToken<T>)",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 49,
		"linenumber" : 185,
		"changeype" : "REMOVED_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "com.google.inject.Key.newInstance(Type)",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 51,
		"linenumber" : 76,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "factories.put(Key.newInstance(Container.class, Key.DEFAULT_NAME), CONTAINER_FACTORY);]factories.put(Key.get(Container.class, Key.DEFAULT_NAME), CONTAINER_FACTORY);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 62,
		"linenumber" : 78,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new ManualTypeToken<Object>(getSuperclassTypeParameter(subclass));]new SimpleTypeToken<Object>(getSuperclassTypeParameter(subclass));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 65,
		"linenumber" : 160,
		"changeype" : "ADDITIONAL_CLASS",
		"changeentity" : "CLASS",
		"changecontent" : "com.google.inject.TypeToken.SimpleTypeToken",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 65,
		"linenumber" : 160,
		"changeype" : "REMOVED_CLASS",
		"changeentity" : "CLASS",
		"changecontent" : "com.google.inject.TypeToken.ManualTypeToken",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 76,
		"linenumber" : 33,
		"changeype" : "REMOVED_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "com.google.inject.BindingBuilder.externalFactory : Factory<? extends T>",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 76,
		"linenumber" : 35,
		"changeype" : "ADDITIONAL_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "com.google.inject.BindingBuilder.eagerlyLoad : boolean",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 77,
		"linenumber" : 34,
		"changeype" : "REMOVED_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "com.google.inject.BindingBuilder.exportKeys : List<Key<? super T>>",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 77,
		"linenumber" : 37,
		"changeype" : "ADDITIONAL_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "com.google.inject.BindingBuilder.errorMessages : Set<ErrorMessage>",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 78,
		"linenumber" : 58,
		"changeype" : "REMOVED_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "com.google.inject.BindingBuilder.implementation(Class<I>)",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 78,
		"linenumber" : 72,
		"changeype" : "ADDITIONAL_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "com.google.inject.BindingBuilder.to(Class<I>)",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 84,
		"linenumber" : 161,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 111,
		"linenumber" : 124,
		"changeype" : "ADDITIONAL_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "com.google.inject.ContainerBuilder.bind(TypeToken<T>)",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 111,
		"linenumber" : 261,
		"changeype" : "METHOD_RENAMING",
		"changeentity" : "METHOD",
		"changecontent" : "com.google.inject.ContainerBuilder.factory(Class<T>)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 111,
		"linenumber" : 267,
		"changeype" : "PARAMETER_RENAMING",
		"changeentity" : "PARAMETER",
		"changecontent" : "type]clazz",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 111,
		"linenumber" : 267,
		"changeype" : "PARAMETER_TYPE_CHANGE",
		"changeentity" : "PARAMETERIZED_TYPE",
		"changecontent" : "type: Class<T>]clazz: Class<T>",
		"parententity" : "PARAMETER"
	},
	{
		"linetupleid" : 112,
		"linenumber" : 268,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "factory(type, Key.DEFAULT_NAME, type);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 122,
		"linenumber" : 262,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "Class<?> parameterType:parameterTypes]Type parameterType:parameterTypes",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 134,
		"linenumber" : 69,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new DependencyException((expectedType.getName() + \" is not an interface.\"));]new ConfigurationException((expectedType.getName() + \" is not an interface.\"));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 142,
		"linenumber" : 486,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(scope == null)]((scope == null) || (scope == DEFAULT_SCOPE))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 149,
		"linenumber" : 226,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new MissingDependencyException(((((\"No mapping found for dependency \" + key) + \" in \") + field) + \".\"));]new MissingDependencyException((((\"No mapping found for dependency \" + key) + \" for field: \") + field));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 150,
		"linenumber" : 277,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new MissingDependencyException(((((\"No mapping found for dependency \" + key) + \" in \") + member) + \".\"));]new MissingDependencyException(((((\"No mapping found for dependency \" + key) + \" for member: \") + member) + \"\"));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 163,
		"linenumber" : 49,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "ConstructionContext<T> constructionContext = (ConstructionContext<T>) constructionContexts.get(key);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 163,
		"linenumber" : 50,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "ConstructionContext<T> constructionContext = new ConstructionContext<T>();",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 164,
		"linenumber" : 48,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(constructionContexts == null)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 164,
		"linenumber" : 51,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(constructionContext == null)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 165,
		"linenumber" : 49,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "constructionContexts = new HashMap<Object, ConstructionContext<?>>();",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 165,
		"linenumber" : 52,
		"changeype" : "STATEMENT_ORDERING_CHANGE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "constructionContext = new ConstructionContext<T>();",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 167,
		"linenumber" : 334,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.method = method;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 167,
		"linenumber" : 341,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.fastMethod = FastClass.create(method.getDeclaringClass()).getMethod(method);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 200,
		"linenumber" : 132,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(Class<T>) typeToken.getRawType();]typeToken.getRawType();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 203,
		"linenumber" : 412,
		"changeype" : "PARENT_INTERFACE_INSERT",
		"changeentity" : "PARAMETERIZED_TYPE",
		"changecontent" : "Factory<T>",
		"parententity" : "SUPER_INTERFACE_TYPES"
	},
	{
		"linetupleid" : 203,
		"linenumber" : 412,
		"changeype" : "UNCLASSIFIED_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "static",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 205,
		"linenumber" : 117,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "System.err.println(((\"Spring: \" + ((count * 1000) / time)) + \" creations/s\"));]System.err.println(((\"Spring:  \" + ((count * 1000) / time)) + \" creations/s\"));",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 213,
		"linenumber" : 38,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "private",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 216,
		"linenumber" : 345,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new MissingDependencyException(((((\"No mapping found for dependency \" + key) + \" for member: \") + member) + \"\"));]new MissingDependencyException(((((\"Missing binding to \" + key) + \" required by \\\'\") + member) + \"\\\'.\"));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 217,
		"linenumber" : 593,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CATCH_CLAUSE",
		"changecontent" : "ConstantConversionException]ConfigurationException",
		"parententity" : "CATCH_CLAUSES"
	},
	{
		"linetupleid" : 225,
		"linenumber" : 106,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "put(Scopes.SINGLETON, SingletonScope.INSTANCE);]put(Scopes.CONTAINER, ContainerScope.INSTANCE);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 230,
		"linenumber" : 303,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "final List<ContainerImpl.ContextualCallable<Void>> singletonLoaders = new ArrayList<ContainerImpl.ContextualCallable<Void>>();]final List<ContainerImpl.ContextualCallable<Void>> preloaders = new ArrayList<ContainerImpl.ContextualCallable<Void>>();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 232,
		"linenumber" : 311,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "builder.isSingleton()]builder.isInContainerScope()",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 233,
		"linenumber" : 312,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "singletonLoaders.add(new ContainerImpl.ContextualCallable<Void>() {\n  public Void call(InternalContext context) {\n    context.setExternalContext(ExternalContext.newInstance(null, key, context.getContainerImpl()));\n    try\n      {\n        factory.get(context);\n        return null;\n      }\n    finally\n      {\n        context.setExternalContext(null);\n      }\n  }\n});]preloaders.add(new ContainerImpl.ContextualCallable<Void>() {\n  public Void call(InternalContext context) {\n    context.setExternalContext(ExternalContext.newInstance(null, key, context.getContainerImpl()));\n    try\n      {\n        factory.get(context);\n        return null;\n      }\n    finally\n      {\n        context.setExternalContext(null);\n      }\n  }\n});",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 237,
		"linenumber" : 347,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "error.append((index ++)).append(\". \").append(\"at \").append(errorMessage.getSource()).append(\':\').append(\'\\n\').append(\"  \").append(errorMessage.getMessage()).append(\"\\n\\n\");",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 237,
		"linenumber" : 356,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "error.append(errorMessage).append(\'\\n\');",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 237,
		"linenumber" : 356,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "error.append(errorMessage).append(\'\\n\');]error.append(errorMessages.size()).append(\" error[s]\\n\");",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 238,
		"linenumber" : 366,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "loadSingletons]preload",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 243,
		"linenumber" : 536,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.scope = scopes.get(scopeName);]this.scope = scopes.get(nonNull(scopeName, \"scope name\"));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 250,
		"linenumber" : 128,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "errorHandler.handle(ErrorMessage.MISSING_BINDING, member, key);",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 250,
		"linenumber" : 128,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "errorHandler.handle(((((\"Missing binding to \" + key) + \" required by \\\'\") + member) + \"\\\'.\"));",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 254,
		"linenumber" : 322,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new MissingDependencyException(((((\"Missing binding to \" + key) + \" required by \\\'\") + field) + \"\\\'.\"));]new MissingDependencyException(key, field);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 260,
		"linenumber" : 24,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 261,
		"linenumber" : 26,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 265,
		"linenumber" : 46,
		"changeype" : "ADDITIONAL_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "com.google.inject.Key.typeLiteral : TypeLiteral<T>",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 265,
		"linenumber" : 46,
		"changeype" : "REMOVED_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "com.google.inject.Key.typeToken : TypeToken<T>",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 266,
		"linenumber" : 62,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.typeToken = (TypeToken<T>) TypeToken.fromSuperclassTypeParameter(getClass());]this.typeLiteral = (TypeLiteral<T>) TypeLiteral.fromSuperclassTypeParameter(getClass());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 268,
		"linenumber" : 88,
		"changeype" : "PARAMETER_INSERT",
		"changeentity" : "PARAMETER",
		"changecontent" : "typeLiteral",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 268,
		"linenumber" : 88,
		"changeype" : "PARAMETER_DELETE",
		"changeentity" : "PARAMETER",
		"changecontent" : "typeToken",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 269,
		"linenumber" : 90,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.typeLiteral = typeLiteral;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 269,
		"linenumber" : 90,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.typeToken = typeToken;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 281,
		"linenumber" : 198,
		"changeype" : "PARAMETER_INSERT",
		"changeentity" : "PARAMETER",
		"changecontent" : "typeLiteral",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 281,
		"linenumber" : 198,
		"changeype" : "PARAMETER_DELETE",
		"changeentity" : "PARAMETER",
		"changecontent" : "typeToken",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 282,
		"linenumber" : 199,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(typeToken, name);]super(typeLiteral, name);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 283,
		"linenumber" : 166,
		"changeype" : "PARAMETER_INSERT",
		"changeentity" : "PARAMETER",
		"changecontent" : "typeLiteral",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 283,
		"linenumber" : 166,
		"changeype" : "PARAMETER_DELETE",
		"changeentity" : "PARAMETER",
		"changecontent" : "typeToken",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 284,
		"linenumber" : 167,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "bind(Key.get(typeToken));]bind(Key.get(typeLiteral));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 299,
		"linenumber" : 616,
		"changeype" : "ADDITIONAL_CLASS",
		"changeentity" : "CLASS",
		"changecontent" : "com.google.inject.ContainerBuilder.DefaultFactory",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 299,
		"linenumber" : 655,
		"changeype" : "REMOVED_CLASS",
		"changeentity" : "CLASS",
		"changecontent" : "com.google.inject.ContainerBuilder.BindingBuilder.DefaultFactory",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 301,
		"linenumber" : 67,
		"changeype" : "ATTRIBUTE_TYPE_CHANGE",
		"changeentity" : "PARAMETERIZED_TYPE",
		"changecontent" : "List<Class<?>>",
		"parententity" : "FIELD"
	},
	{
		"linetupleid" : 302,
		"linenumber" : 240,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "staticInjections.addAll(Arrays.asList(types));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 302,
		"linenumber" : 241,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "staticInjections.add(new StaticInjection(source(), types));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 308,
		"linenumber" : 26,
		"changeype" : "ATTRIBUTE_RENAMING",
		"changeentity" : "FIELD",
		"changecontent" : "com.google.inject.Scopes.DEFAULT : String",
		"parententity" : "FIELD"
	},
	{
		"linetupleid" : 317,
		"linenumber" : 297,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "final List<ContainerImpl.ContextualCallable<Void>> preloaders = new ArrayList<ContainerImpl.ContextualCallable<Void>>();]final List<ContextualCallable<Void>> preloaders = new ArrayList<ContextualCallable<Void>>();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 320,
		"linenumber" : 342,
		"changeype" : "PARAMETER_TYPE_CHANGE",
		"changeentity" : "PARAMETERIZED_TYPE",
		"changecontent" : "preloaders: List<ContainerImpl.ContextualCallable<Void>>]preloaders: List<ContextualCallable<Void>>",
		"parententity" : "PARAMETER"
	},
	{
		"linetupleid" : 321,
		"linenumber" : 343,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "container.callInContext(new ContainerImpl.ContextualCallable<Void>() {\n  public Void call(InternalContext context) {\n    for (ContainerImpl.ContextualCallable<Void> preloader : preloaders) \n      {\n        preloader.call(context);\n      }\n    return null;\n  }\n});]container.callInContext(new ContextualCallable<Void>() {\n  public Void call(InternalContext context) {\n    for (ContextualCallable<Void> preloader : preloaders) \n      {\n        preloader.call(context);\n      }\n    return null;\n  }\n});",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 332,
		"linenumber" : 109,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "InternalFactory<T> internalFactory = (InternalFactory<T>) factories.get(key);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 332,
		"linenumber" : 110,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Binding<T> binding = getBinding(key);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 333,
		"linenumber" : 111,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(internalFactory != null)](binding != null)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 334,
		"linenumber" : 112,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "internalFactory;]binding.getInternalFactory();",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 337,
		"linenumber" : 151,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "InternalFactory<String> stringFactory = (InternalFactory<String>) factories.get(Key.get(String.class, key.getName()));]Binding<String> stringBinding = getBinding(Key.get(String.class, key.getName()));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 338,
		"linenumber" : 154,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((stringFactory == null) || (! (stringFactory instanceof ConstantFactory)))]((stringBinding == null) || (! stringBinding.isConstant()))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 339,
		"linenumber" : 163,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String value = stringFactory.get(null);]String value = stringBinding.getInternalFactory().get(null);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 344,
		"linenumber" : 710,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "implementation.toString();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 344,
		"linenumber" : 725,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new ToStringBuilder(Factory.class).add(\"implementation\", implementation).toString();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 347,
		"linenumber" : 151,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "System.err.println(((label + ((count * 1000) / time)) + \" creations/s\"));]System.err.println(((label + format.format(((count * 1000) / time))) + \" creations/s\"));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 353,
		"linenumber" : 334,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new ContainerCreationException(createErrorMessage());]new ContainerCreationException(errorMessages);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 366,
		"linenumber" : 903,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "add(new ErrorMessage(source, message));]add(new Message(source, message));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 394,
		"linenumber" : 170,
		"changeype" : "METHOD_RENAMING",
		"changeentity" : "METHOD",
		"changecontent" : "com.google.inject.intercept.ProxyFactory.MethodInterceptorsPair.add(MethodInterceptor)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 394,
		"linenumber" : 170,
		"changeype" : "PARAMETER_DELETE",
		"changeentity" : "PARAMETER",
		"changecontent" : "interceptor",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 394,
		"linenumber" : 171,
		"changeype" : "PARAMETER_INSERT",
		"changeentity" : "PARAMETER",
		"changecontent" : "interceptors",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 395,
		"linenumber" : 171,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(interceptors == null)](this.interceptors == null)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 396,
		"linenumber" : 172,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "interceptors = new ArrayList<MethodInterceptor>();]this.interceptors = new ArrayList<MethodInterceptor>();",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 398,
		"linenumber" : 38,
		"changeype" : "PARAMETER_TYPE_CHANGE",
		"changeentity" : "PARAMETERIZED_TYPE",
		"changecontent" : "classQuery: Query<? super Class>]classQuery: Query<? super Class<",
		"parententity" : "PARAMETER"
	},
	{
		"linetupleid" : 399,
		"linenumber" : 40,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "methodAspects.add(new MethodAspect(classQuery, methodQuery, interceptor));]methodAspects.add(new MethodAspect(classQuery, methodQuery, interceptors));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 410,
		"linenumber" : 319,
		"changeype" : "STATEMENT_ORDERING_CHANGE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "stopwatch.resetAndLog(logger, \"Binding creation\");",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 410,
		"linenumber" : 321,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "stopwatch.resetAndLog(logger, \"Binding indexing\");",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 415,
		"linenumber" : 596,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new ConfigurationException(((\"Missing binding for \" + key) + \".\"));]new ConfigurationException(((\"Missing binding to \" + AbstractErrorHandler.convert(key)) + \".\"));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 427,
		"linenumber" : 671,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((scope == null) || (scope == DEFAULT_SCOPE))]((scope == null) || (scope == DEFAULT))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 439,
		"linenumber" : 42,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "HttpServletRequest previous = localRequest.get();]Context previous = localContext.get();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 440,
		"linenumber" : 44,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "localRequest.set((HttpServletRequest) servletRequest);]localContext.set(new Context((HttpServletRequest) servletRequest, (HttpServletResponse) servletResponse));",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 444,
		"linenumber" : 301,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "container = new ContainerImpl(constructionProxyFactory, bindings);]container = new ContainerImpl(proxyFactoryBuilder.create(), bindings);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 467,
		"linenumber" : 119,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "List bindings = bindingsByType.get(type);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 468,
		"linenumber" : 120,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(bindings == null)](bindingsForThisType == null)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 470,
		"linenumber" : 189,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(InternalFactory<T>) counterpartBinding.getInternalFactory();](InternalFactory<? extends T>) counterpartBinding.getInternalFactory();",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 472,
		"linenumber" : 565,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "List<Injector> injectors = this.injectors.get(o.getClass());]List<Injector> injectorsForClass = injectors.get(o.getClass());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 473,
		"linenumber" : 566,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "Injector injector:injectors]Injector injector:injectorsForClass",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 481,
		"linenumber" : 114,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "MethodInterceptorsPair methodInterceptorsPair:methodInterceptorsPairs]MethodInterceptorsPair pair:methodInterceptorsPairs",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 482,
		"linenumber" : 116,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "methodAspect.matches(methodInterceptorsPair.method)]methodAspect.matches(pair.method)",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 483,
		"linenumber" : 117,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "methodInterceptorsPair.addAll(methodAspect.interceptors());]pair.addAll(methodAspect.interceptors());",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 484,
		"linenumber" : 131,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "MethodInterceptorsPair methodInterceptorsPair = methodInterceptorsPairs.get(i);]MethodInterceptorsPair pair = methodInterceptorsPairs.get(i);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 485,
		"linenumber" : 133,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! methodInterceptorsPair.hasInterceptors())](! pair.hasInterceptors())",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 486,
		"linenumber" : 137,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "callbacks[i] = new InterceptorStackCallback(methodInterceptorsPair.method, methodInterceptorsPair.interceptors);]callbacks[i] = new InterceptorStackCallback(pair.method, pair.interceptors);",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 508,
		"linenumber" : 186,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Class<?> primitiveCounterpart = PRIMITIVE_COUNTERPARTS.get(key.getType().getRawType());]Class<?> primitiveCounterpart = PRIMITIVE_COUNTERPARTS.get(rawType);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 510,
		"linenumber" : 227,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "Enum.class.isAssignableFrom(type)]Enum.class.isAssignableFrom(rawType)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 511,
		"linenumber" : 230,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "t = (T) Enum.valueOf((Class) type, value);]t = (T) Enum.valueOf((Class) rawType, value);",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 524,
		"linenumber" : 821,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(this.bindingInfo != null)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 524,
		"linenumber" : 822,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(this.value != null)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 536,
		"linenumber" : 51,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "fmt.format(\"%s) Error at %s:%n\", (index ++), errorMessage.getSource()).format(\" %s%n%n\", errorMessage.getMessage());]fmt.format(\"%s) Error at %s:%n\", (index ++), errorMessage.getSourceString()).format(\" %s%n%n\", errorMessage.getMessage());",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 539,
		"linenumber" : 66,
		"changeype" : "PARAMETER_TYPE_CHANGE",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "clazz: String",
		"parententity" : "PARAMETER"
	},
	{
		"linetupleid" : 539,
		"linenumber" : 66,
		"changeype" : "PARAMETER_DELETE",
		"changeentity" : "PARAMETER",
		"changecontent" : "map",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 539,
		"linenumber" : 133,
		"changeype" : "ADDITIONAL_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "com.google.inject.struts2.GuiceObjectFactory.superBuildInterceptor(InterceptorConfig,Map)",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 540,
		"linenumber" : 67,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "container.getCreator(Class.forName(clazz)).get();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 541,
		"linenumber" : 70,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new ConfigurationException((expectedType.getName() + \" is not an interface.\"));]new ConfigurationException((((\"Tried proxying \" + expectedType.getName()) + \" to support a circular dependency, but\") + \" it is not an interface.\"));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 546,
		"linenumber" : 644,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new ConfigurationException(((\"Missing binding to \" + AbstractErrorHandler.convert(key)) + \".\"));]new ConfigurationException(((\"Missing binding to \" + ErrorMessages.convert(key)) + \".\"));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 550,
		"linenumber" : 477,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "name = ((annotation == null) ? defaultName : annotation.value());]name = ((inject == null) ? defaultName : inject.value());",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 567,
		"linenumber" : 39,
		"changeype" : "REMOVED_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "com.google.inject.Key.DEFAULT_NAME : String",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 567,
		"linenumber" : 46,
		"changeype" : "ADDITIONAL_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "com.google.inject.Key.annotationStrategy : AnnotationStrategy",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 570,
		"linenumber" : 85,
		"changeype" : "PARAMETER_DELETE",
		"changeentity" : "PARAMETER",
		"changecontent" : "name",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 571,
		"linenumber" : 86,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.name = nonNull(name, \"name\");",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 571,
		"linenumber" : 143,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.annotationStrategy = annotationStrategy;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 581,
		"linenumber" : 172,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new SimpleKey<Object>(type, name);]new SimpleKey<Object>(type, strategyFor(new NamedImpl(name)));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 592,
		"linenumber" : 222,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "bind(key, source).to(value);",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 592,
		"linenumber" : 239,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "bind(source, Key.strategyFor(new NamedImpl(key))).to(value);",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 604,
		"linenumber" : 163,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "final Factory<?> factory = getFactory(Key.get(entryType, key.getName()));]final Factory<?> factory = getFactory(key.ofType(entryType));",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 612,
		"linenumber" : 353,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "inject.required()](! inject.optional())",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 633,
		"linenumber" : 82,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "bind(new TypeLiteral<Map<String, String[]>>() {\n}).named(REQUEST_PARAMETERS).to(new Factory<Map<String, String[]>>() {\n  public @SuppressWarnings({\"unchecked\"}) Map<String, String[]> get() {\n    return GuiceFilter.getRequest().getParameterMap();\n  }\n});]bind(new TypeLiteral<Map<String, String[]>>() {\n}).annotatedWith(RequestParameters.class).to(new Factory<Map<String, String[]>>() {\n  public @SuppressWarnings({\"unchecked\"}) Map<String, String[]> get() {\n    return GuiceFilter.getRequest().getParameterMap();\n  }\n});",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 639,
		"linenumber" : 93,
		"changeype" : "ADDITIONAL_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "com.google.inject.ErrorMessages.DUPLICATE_SCOPE_ANNOTATIONS : String",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 656,
		"linenumber" : 268,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(annotation.annotationType().getAnnotation(ForBinding.class) != null)](annotation.annotationType().getAnnotation(Binder.class) != null)",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 665,
		"linenumber" : 50,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(name + map.toString());](name + map.toString().replace(\'{\', \'[\').replace(\'}\', \']\'));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 681,
		"linenumber" : 588,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.factory = new InternalFactoryToFactoryAdapter<T>(factory);]this.factory = new InternalFactoryToGeneratorAdapter<T>(generator);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 684,
		"linenumber" : 726,
		"changeype" : "ADDITIONAL_CLASS",
		"changeentity" : "CLASS",
		"changecontent" : "com.google.inject.ContainerBuilder.BoundGenerator",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 684,
		"linenumber" : 735,
		"changeype" : "REMOVED_CLASS",
		"changeentity" : "CLASS",
		"changecontent" : "com.google.inject.ContainerBuilder.DelegatingFactorySupport",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 746,
		"linenumber" : 788,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new ToStringBuilder(Factory.class).add(\"implementation\", implementation).toString();]new ToStringBuilder(Locator.class).add(\"implementation\", implementation).toString();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 747,
		"linenumber" : 161,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "rawType.equals(Factory.class)]rawType.equals(Locator.class)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 748,
		"linenumber" : 162,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Type factoryType = key.getType().getType();]Type locatorType = key.getType().getType();",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 749,
		"linenumber" : 163,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! (factoryType instanceof ParameterizedType))](! (locatorType instanceof ParameterizedType))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 750,
		"linenumber" : 166,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Type entryType = (ParameterizedType) factoryType.getActualTypeArguments()[0];]Type entryType = (ParameterizedType) locatorType.getActualTypeArguments()[0];",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 826,
		"linenumber" : 271,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "new ConfigurationErrorHandler(source).handle(message, arguments);]configurationErrorHandler.handle(source, message, arguments);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 850,
		"linenumber" : 133,
		"changeype" : "REMOVED_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "com.google.inject.ContainerImpl.withErrorHandler(ErrorHandler,Runnable)",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 850,
		"linenumber" : 135,
		"changeype" : "ADDITIONAL_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "com.google.inject.ContainerImpl.withDefaultSource(Object,Runnable)",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 858,
		"linenumber" : 52,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "StackTraceElement element = new StackTraceElement(declaringClass.getName(), member.getName(), lineNumbers.getSource(), ((lineNumber == null) ? 0 : lineNumber));]StackTraceElement element = new StackTraceElement(declaringClass.getName(), member.getName(), lineNumbers.getSource(), ((lineNumber == null) ? lineNumbers.getFirstLine() : lineNumber));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 887,
		"linenumber" : 208,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "ConstantBindingBuilder builder = new ConstantBindingBuilder(annotationStrategy).from(source);]ConstantBindingBuilderImpl builder = new ConstantBindingBuilderImpl(this, annotationStrategy).from(source);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 930,
		"linenumber" : 8,
		"changeype" : "REMOVING_CLASS_DERIVABILITY",
		"changeentity" : "MODIFIER",
		"changecontent" : "final",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 936,
		"linenumber" : 53,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 936,
		"linenumber" : 53,
		"changeype" : "ADDING_CLASS_DERIVABILITY",
		"changeentity" : "MODIFIER",
		"changecontent" : "final",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 936,
		"linenumber" : 53,
		"changeype" : "PARENT_CLASS_DELETE",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "SourceConsumer",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 937,
		"linenumber" : 246,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 937,
		"linenumber" : 246,
		"changeype" : "UNCLASSIFIED_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "synchronized",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 980,
		"linenumber" : 117,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((scope == null) || (scope == DEFAULT))](scope == null)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 984,
		"linenumber" : 128,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(firstLine == 0)](line < firstLine)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1094,
		"linenumber" : 401,
		"changeype" : "RETURN_TYPE_CHANGE",
		"changeentity" : "PARAMETERIZED_TYPE",
		"changecontent" : "com.google.inject.ContainerImpl.BindingsMultimap.getAll(TypeLiteral<T>): List<Binding<T>>]com.google.inject.ContainerImpl.BindingsMultimap.getAll(TypeLiteral<T>): List<BindingImpl<T>>",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1095,
		"linenumber" : 402,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "List<Binding<T>> list = getFromMap(type);]List<BindingImpl<T>> list = getFromMap(type);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1096,
		"linenumber" : 403,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((list == null) ? Collections.<Binding<T>>emptyList() : list);]((list == null) ? Collections.<BindingImpl<T>>emptyList() : list);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1146,
		"linenumber" : 116,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "bind(Container.class).to(CONTAINER_FACTORY);]bind(Injector.class).to(INJECTOR_FACTORY);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1213,
		"linenumber" : 37,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Constructor<T> constructor = findConstructorIn(container, implementation);]Constructor<T> constructor = findConstructorIn(injector, implementation);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1214,
		"linenumber" : 38,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "parameterInjectors = createParameterInjector(container, constructor);]parameterInjectors = createParameterInjector(injector, constructor);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1215,
		"linenumber" : 39,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "injectors = container.injectors.get(implementation).toArray(new ContainerImpl.Injector[0]);]memberInjectors = injector.injectors.get(implementation).toArray(new InjectorImpl.SingleMemberInjector[0]);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1216,
		"linenumber" : 41,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "constructionProxy = container.constructionProxyFactory.get(constructor);]constructionProxy = injector.constructionProxyFactory.get(constructor);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1220,
		"linenumber" : 65,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CATCH_CLAUSE",
		"changecontent" : "ContainerImpl.MissingDependencyException]InjectorImpl.MissingDependencyException",
		"parententity" : "CATCH_CLAUSES"
	},
	{
		"linetupleid" : 1221,
		"linenumber" : 66,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "e.handle(container.errorHandler);]e.handle(injector.errorHandler);",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 1223,
		"linenumber" : 81,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "container.errorHandler.handle(StackTraceElements.forMember(constructor), ErrorMessages.OPTIONAL_CONSTRUCTOR);]injector.errorHandler.handle(StackTraceElements.forMember(constructor), ErrorMessages.OPTIONAL_CONSTRUCTOR);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 1240,
		"linenumber" : 54,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "Binding<?> binding:container.getBindings().values()]Binding<?> binding:injector.getBindings().values()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1257,
		"linenumber" : 69,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Injector injector = Guice.createInjector(new ServiceModule());]Injector injector = Guice.createInjector(new MyModule());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1271,
		"linenumber" : 267,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(((rawType.isArray() || rawType.isEnum()) || Modifier.isAbstract(modifiers)) || rawType.isPrimitive())]((rawType.isArray() || rawType.isEnum()) || rawType.isPrimitive())",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1339,
		"linenumber" : 253,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "binder.creationListeners.add(new CreationListener() {\n  public void notify(InjectorImpl injector) {\n    try\n      {\n        injector.injectMembers(o);\n      }\n    catch (Exception e)\n      {\n        String className = e.getClass().getSimpleName();\n        String message = ErrorMessages.getRootMessage(e);\n        String logMessage = String.format(ErrorMessages.ERROR_INJECTING_MEMBERS, o, message);\n        logger.log(Level.INFO, logMessage, e);\n        binder.addError(source, ErrorMessages.ERROR_INJECTING_MEMBERS_SEE_LOG, className, o, message);\n      }\n  }\n});]binder.instanceInjectors.add(new CreationListener() {\n  public void notify(InjectorImpl injector) {\n    try\n      {\n        injector.injectMembers(o);\n      }\n    catch (Exception e)\n      {\n        String className = e.getClass().getSimpleName();\n        String message = ErrorMessages.getRootMessage(e);\n        String logMessage = String.format(ErrorMessages.ERROR_INJECTING_MEMBERS, o, message);\n        logger.log(Level.INFO, logMessage, e);\n        binder.addError(source, ErrorMessages.ERROR_INJECTING_MEMBERS_SEE_LOG, className, o, message);\n      }\n  }\n});",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1340,
		"linenumber" : 42,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((provided != null) || allowNullsBadBadBad)]((provided != null) || allowNullsBadBadBad())",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1396,
		"linenumber" : 137,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.instance = instance;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1396,
		"linenumber" : 137,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.instance = Objects.nonNull(instance, \"instance\");",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1397,
		"linenumber" : 138,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.factory = new ConstantFactory<T>(instance);]this.factory = new ConstantFactory<T>(instance, source);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1417,
		"linenumber" : 32,
		"changeype" : "METHOD_RENAMING",
		"changeentity" : "METHOD",
		"changecontent" : "com.google.inject.ProvisionException.createMessage(ExternalContext<?>)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1417,
		"linenumber" : 32,
		"changeype" : "UNCLASSIFIED_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "static",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 1417,
		"linenumber" : 32,
		"changeype" : "RETURN_TYPE_DELETE",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "com.google.inject.ProvisionException.addContext(ExternalContext<?>): String]com.google.inject.ProvisionException.addContext(ExternalContext<?>): void",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1417,
		"linenumber" : 86,
		"changeype" : "ADDITIONAL_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "com.google.inject.ProvisionException.contextToSnippet(ExternalContext)",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 1422,
		"linenumber" : 44,
		"changeype" : "PARAMETER_RENAMING",
		"changeentity" : "PARAMETER",
		"changecontent" : "externalContext]externalContextStack",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 1422,
		"linenumber" : 44,
		"changeype" : "PARAMETER_TYPE_CHANGE",
		"changeentity" : "PARAMETERIZED_TYPE",
		"changecontent" : "externalContext: ExternalContext<?>]externalContextStack: List<ExternalContext<?>>",
		"parententity" : "PARAMETER"
	},
	{
		"linetupleid" : 1424,
		"linenumber" : 67,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new ProvisionException(context.getExternalContext(), e, ErrorMessages.ERROR_IN_PROVIDER);]new ProvisionException(context.getExternalContextStack(), e, ErrorMessages.ERROR_IN_PROVIDER);",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 1439,
		"linenumber" : 90,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "private",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 1465,
		"linenumber" : 340,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "preloaders.add(new BindingPreloader(key, factory));]preloaders.add(new BindingPreloader(binding.key, binding.internalFactory));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 1507,
		"linenumber" : 463,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Key<?> key = Key.get(field.getGenericType(), field, field.getAnnotations(), errorHandler);]final Key<?> key = Key.get(field.getGenericType(), field, field.getAnnotations(), errorHandler);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1533,
		"linenumber" : 163,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 1544,
		"linenumber" : 346,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "@SuppressWarnings(\"unchecked\") T converted = (T) matchingConverter.typeConverter.convert(key, stringValue);]@SuppressWarnings(\"unchecked\") T converted = (T) matchingConverter.typeConverter.convert(key.getTypeLiteral(), stringValue);",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 1548,
		"linenumber" : 346,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "@SuppressWarnings(\"unchecked\") T converted = (T) matchingConverter.typeConverter.convert(key.getTypeLiteral(), stringValue);]@SuppressWarnings(\"unchecked\") T converted = (T) matchingConverter.typeConverter.convert(stringValue, key.getTypeLiteral());",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 1621,
		"linenumber" : 82,
		"changeype" : "ADDITIONAL_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "com.google.inject.visitable.VisitableBinder.internalBind(Key<T>)",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 1651,
		"linenumber" : 34,
		"changeype" : "PARENT_INTERFACE_INSERT",
		"changeentity" : "PARAMETERIZED_TYPE",
		"changecontent" : "Command.Visitor",
		"parententity" : "SUPER_INTERFACE_TYPES"
	},
	{
		"linetupleid" : 1651,
		"linenumber" : 34,
		"changeype" : "PARENT_CLASS_INSERT",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "Void",
		"parententity" : "TYPE_PARAMETERS"
	},
	{
		"linetupleid" : 1651,
		"linenumber" : 34,
		"changeype" : "UNCLASSIFIED_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "abstract",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 1651,
		"linenumber" : 34,
		"changeype" : "PARENT_INTERFACE_DELETE",
		"changeentity" : "PARAMETERIZED_TYPE",
		"changecontent" : "BinderVisitor<Void>",
		"parententity" : "SUPER_INTERFACE_TYPES"
	},
	{
		"linetupleid" : 1691,
		"linenumber" : 38,
		"changeype" : "ATTRIBUTE_TYPE_CHANGE",
		"changeentity" : "PARAMETERIZED_TYPE",
		"changecontent" : "Key<InjectionInterceptor>]Key<ProvisionInterceptor>",
		"parententity" : "FIELD"
	},
	{
		"linetupleid" : 1787,
		"linenumber" : 37,
		"changeype" : "ADDITIONAL_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "com.google.inject.ProxyFactoryBuilder.intercept(Matcher<? super Class<?>>,Matcher<? super Method>,List<MethodInterceptor>)",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 1823,
		"linenumber" : 57,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((constructor.getParameterTypes().length == 0) ? null : injector.getParametersInjectors(constructor, constructor.getParameterAnnotations(), constructor.getGenericParameterTypes()));](constructionProxy.getParameters().isEmpty() ? null : injector.getParametersInjectors(constructionProxy.getMember(), constructionProxy.getParameters()));",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 1828,
		"linenumber" : 399,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "converter.typeMatcher.matches(type)]converter.getTypeMatcher().matches(type)",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 1829,
		"linenumber" : 421,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "@SuppressWarnings(\"unchecked\") T converted = (T) matchingConverter.typeConverter.convert(stringValue, key.getTypeLiteral());]@SuppressWarnings(\"unchecked\") T converted = (T) matchingConverter.getTypeConverter().convert(stringValue, key.getTypeLiteral());",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 1836,
		"linenumber" : 994,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "parameterInjectors = ((parameterTypes.length > 0) ? injector.getParametersInjectors(method, method.getParameterAnnotations(), parameterTypes) : null);]parameterInjectors = ((parameterTypes.length > 0) ? injector.getParametersInjectors(method, Parameter.forMethod(injector.errorHandler, method)) : null);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1844,
		"linenumber" : 170,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String implementation = typeName(entry.getKey());]Class<?> implementation = entry.getKey();",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 1845,
		"linenumber" : 171,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "writeLine(\"    if (implementation == %s.class) {\", implementation);]out.openScope(\"if (implementation == %s.class) {\", implementation);",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 1846,
		"linenumber" : 172,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "writeLine(\"      return (ConstructionProxy) new ConstructionProxy<%s>() {\", implementation);]out.openScope(\"return (%s) new %s<%s>() {\", ConstructionProxy.class, ConstructionProxy.class, implementation);",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 1847,
		"linenumber" : 173,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "writeLine(\"        public %s newInstance(final Object... arguments) throws InvocationTargetException {\", implementation);]out.openScope(\"public %s newInstance(final %s... arguments) throws %s {\", implementation, Object.class, InvocationTargetException.class);",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 1848,
		"linenumber" : 174,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "writeLine(\"          return new %s(\", implementation);]out.openScope(\"return new %s(\", implementation);",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 1867,
		"linenumber" : 34,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 1872,
		"linenumber" : 161,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "createConstructionProxy(proxied, constructor.getParameterTypes());]createConstructionProxy(proxied, constructor);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1890,
		"linenumber" : 33,
		"changeype" : "PARENT_CLASS_DELETE",
		"changeentity" : "QUALIFIED_TYPE",
		"changecontent" : "ErrorHandlers.AbstractErrorHandler",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 1890,
		"linenumber" : 35,
		"changeype" : "PARENT_INTERFACE_INSERT",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "ErrorHandler",
		"parententity" : "SUPER_INTERFACE_TYPES"
	},
	{
		"linetupleid" : 1894,
		"linenumber" : 52,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "ConstructorInjector<T> constructor = injector.getConstructor(boundClass);]ConstructorInjector<T> constructor = lateBoundConstructor.constructorInjector;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1935,
		"linenumber" : 220,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((key.getAnnotation() instanceof Element) && (Element) key.getAnnotation().setName().equals(setName));]((key.getTypeLiteral().getType().equals(elementType) && (key.getAnnotation() instanceof Element)) && (Element) key.getAnnotation().setName().equals(setName));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1938,
		"linenumber" : 249,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(((o instanceof Module) && (RealMultibinder) o.elementType.equals(elementType)) && (RealMultibinder) o.setName.equals(setName));](((o instanceof RealMultibinder) && (RealMultibinder) o.elementType.equals(elementType)) && (RealMultibinder) o.setName.equals(setName));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1956,
		"linenumber" : 98,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "newMapBinder(binder, Key.get(MapBinder.<K, V>mapOf(keyType, valueType)), Key.get(MapBinder.<K, V>mapOfProviderOf(keyType, valueType)), Multibinder.<K>newSetBinder(binder, keyType), Multibinder.<V>newSetBinder(binder, valueType));]newMapBinder(binder, valueType, Key.get(MapBinder.<K, V>mapOf(keyType, valueType)), Key.get(MapBinder.<K, V>mapOfProviderOf(keyType, valueType)), Multibinder.<Entry<K, Provider<V>>>newSetBinder(binder, entryOfProviderOf(keyType, valueType)));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1970,
		"linenumber" : 52,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((((((((\"@\" + Element.class.getName()) + \"(setName=\") + setName) + \",role=\") + role) + \",uniqueId=\") + uniqueId) + \")\");]((((((\"@\" + Element.class.getName()) + \"(setName=\") + setName) + \",uniqueId=\") + uniqueId) + \")\");",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1977,
		"linenumber" : 43,
		"changeype" : "REMOVING_METHOD_OVERRIDABILITY",
		"changeentity" : "MODIFIER",
		"changecontent" : "final",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 1988,
		"linenumber" : 143,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "mapOf(keyType, new TypeWithArgument(Provider.class, valueType));]mapOf(keyType, Types.newTypeWithArgument(Provider.class, valueType));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 1990,
		"linenumber" : 36,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "private",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 1990,
		"linenumber" : 36,
		"changeype" : "PARENT_INTERFACE_INSERT",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "Serializable",
		"parententity" : "SUPER_INTERFACE_TYPES"
	},
	{
		"linetupleid" : 1991,
		"linenumber" : 37,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "private",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 2109,
		"linenumber" : 196,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "final BindingImpl<?> binding:injector.explicitBindings.values()]final BindingImpl<?> binding:concat(injector.explicitBindings.values(), injector.jitBindings.values())",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2110,
		"linenumber" : 197,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((stage == Stage.PRODUCTION) || (binding.getLoadStrategy() == LoadStrategy.EAGER))](((stage == Stage.PRODUCTION) && (binding.getScope() == Scopes.SINGLETON)) || (binding.getLoadStrategy() == LoadStrategy.EAGER))",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 2117,
		"linenumber" : 74,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! injector.outstandingInjections.keySet().remove(toInject))](! injector.outstandingInjections.remove(toInject))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2216,
		"linenumber" : 59,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "Object toInject:outstandingInjections.keySet()]Object toInject:outstandingInjections",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2221,
		"linenumber" : 409,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.provider = Providers.of(value);]provider = Providers.of(value);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2229,
		"linenumber" : 746,
		"changeype" : "ADDITIONAL_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "com.google.inject.InjectorImpl.BindingsMultimap.multimap : Multimap<TypeLiteral<?>, Binding<?>>",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 2229,
		"linenumber" : 759,
		"changeype" : "REMOVED_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "com.google.inject.InjectorImpl.BindingsMultimap.map : Map<TypeLiteral<?>, List<? extends BindingImpl<?>>>",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 2230,
		"linenumber" : 755,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(List<Binding<T>>) (List) multimap.get(type);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2274,
		"linenumber" : 92,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String message = ((getMember() != null) ? String.format(ErrorMessages.CANNOT_INJECT_NULL_INTO_MEMBER, source, getMember()) : String.format(ErrorMessages.CANNOT_INJECT_NULL, source));]String message = ((getMember() != null) ? ErrorMessage.cannotInjectNullIntoMember(source, getMember()).toString() : ErrorMessage.cannotInjectNull(source).toString());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2306,
		"linenumber" : 361,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new ResolveFailedException(ErrorMessages.AMBIGUOUS_TYPE_CONVERSION, stringValue, type, matchingConverter, converter);]new ResolveFailedException(ErrorMessage.ambiguousTypeConversion(stringValue, type, matchingConverter, converter));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 2453,
		"linenumber" : 1070,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(o instanceof ResolveFailedException)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2453,
		"linenumber" : 1129,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(o instanceof Errors)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2454,
		"linenumber" : 1071,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "(ResolveFailedException) o;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 2454,
		"linenumber" : 1130,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "(Errors) o.copy().toException();",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 2518,
		"linenumber" : 38,
		"changeype" : "PARAMETER_INSERT",
		"changeentity" : "PARAMETER",
		"changecontent" : "errors",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 2528,
		"linenumber" : 109,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Throwable cause = ((e.getCause() != null) ? e.getCause() : e);]Throwable cause = ((userException.getCause() != null) ? userException.getCause() : userException);",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 2529,
		"linenumber" : 110,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new ProvisionException(ErrorMessage.errorInjectingConstructor().toString(), cause);]errors.errorInjectingConstructor(cause).toException();",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 2544,
		"linenumber" : 33,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2544,
		"linenumber" : 37,
		"changeype" : "ADDITIONAL_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "com.google.inject.spi.Message.Message(Object,String,List<InjectionPoint>,Throwable)",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 2545,
		"linenumber" : 34,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.source = checkNotNull(source, \"source\").toString();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2548,
		"linenumber" : 44,
		"changeype" : "STATEMENT_ORDERING_CHANGE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "injectionPoint.checkForNull(provider.get(), source);",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 2548,
		"linenumber" : 44,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "injectionPoint.checkForNull(provider.get(), source);]injectionPoint.checkForNull(errors, result, source);",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 2549,
		"linenumber" : 45,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "CATCH_CLAUSE",
		"changecontent" : "ProvisionException",
		"parententity" : "CATCH_CLAUSES"
	},
	{
		"linetupleid" : 2550,
		"linenumber" : 46,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "e;",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 2586,
		"linenumber" : 113,
		"changeype" : "METHOD_RENAMING",
		"changeentity" : "METHOD",
		"changecontent" : "com.google.inject.internal.Errors.conversionTypeError(Object,TypeLiteral<?>)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2586,
		"linenumber" : 113,
		"changeype" : "PARAMETER_DELETE",
		"changeentity" : "PARAMETER",
		"changecontent" : "converted",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 2587,
		"linenumber" : 114,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "addMessage(\"Converter returned %s but we expected a[n] %s.\", converted, type);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2592,
		"linenumber" : 384,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "errors.conversionTypeError(converted, type).toException();]errors.conversionTypeError(stringValue, source, type, matchingConverter, converted).toException();",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 2593,
		"linenumber" : 392,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "errors.conversionError(stringValue, stringBinding.getSource(), type, matchingConverter, e.getMessage()).toException();]errors.conversionError(stringValue, source, type, matchingConverter, e).toException();",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 2701,
		"linenumber" : 27,
		"changeype" : "REMOVING_CLASS_DERIVABILITY",
		"changeentity" : "MODIFIER",
		"changecontent" : "final",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 2701,
		"linenumber" : 29,
		"changeype" : "UNCLASSIFIED_CHANGE",
		"changeentity" : "TYPE_PARAMETER",
		"changecontent" : "T",
		"parententity" : "TYPE_PARAMETERS"
	},
	{
		"linetupleid" : 2720,
		"linenumber" : 35,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(annotation.annotationType().getAnnotation(BindingAnnotation.class) != null)",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 2721,
		"linenumber" : 36,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(found == null)",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 2744,
		"linenumber" : 50,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "this(SourceProviders.UNKNOWN_SOURCE, message, ImmutableList.<InjectionPoint>of(), null);]this(SourceProvider.UNKNOWN_SOURCE, message, ImmutableList.<InjectionPoint>of(), null);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2757,
		"linenumber" : 228,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "entrySetBinder.addBinding().toInstance(new MapEntry<K, Provider<V>>(key, binder.getProvider(valueKey)));]entrySetBinder.addBinding().toInstance(new MapEntry<K, Provider<V>>(key, binder.withSource(source).getProvider(valueKey)));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2758,
		"linenumber" : 230,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "binder.bind(valueKey);]binder.withSource(source).bind(valueKey);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2770,
		"linenumber" : 196,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "binder.withSource(sourceProvider.get()).bind((Key<T>) Key.get(elementType, new RealElement(setName)));]binder.bind((Key<T>) Key.get(elementType, new RealElement(setName)));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2783,
		"linenumber" : 232,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "entrySetBinder.addBinding().toInstance(new MapEntry<K, Provider<V>>(key, binder.withSource(source).getProvider(valueKey)));]entrySetBinder.addBinding().toInstance(new MapEntry<K, Provider<V>>(key, binder.getProvider(valueKey)));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2784,
		"linenumber" : 234,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "binder.withSource(source).bind(valueKey);]binder.bind(valueKey);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2834,
		"linenumber" : 126,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(HOOK_ENABLED && isHookable(type))](HOOK_ENABLED && (Visibility.forType(type) == Visibility.PUBLIC))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2849,
		"linenumber" : 138,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "bindCommandProcesor = new BindCommandProcessor(errors, injector, injector.scopes, injector.explicitBindings, injector.outstandingInjections);]bindCommandProcesor = new BindCommandProcessor(errors, injector, injector.scopes, injector.explicitBindings, injector.memberInjector);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2879,
		"linenumber" : 55,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "Object toInject:outstandingInjections]Map.Entry<Object, Object> entry:outstandingInjections.entrySet()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2880,
		"linenumber" : 74,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "Object toInject:Lists.newArrayList(outstandingInjections)]Map.Entry<Object, Object> entry:Lists.newArrayList(outstandingInjections.entrySet())",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2883,
		"linenumber" : 77,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "injector.memberInjector.ensureInjected(errors, toInject);]injector.memberInjector.ensureInjected(toInject, errors);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 2927,
		"linenumber" : 121,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "new ErrorsCommandProcessor(errors).processCommands(commands);]new ErrorsElementProcessor(errors).processCommands(elements);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 3134,
		"linenumber" : 89,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "@SuppressWarnings(\"unchecked\") TypeLiteral<T> returnType = (TypeLiteral<T>) TypeLiteral.get(method.getGenericReturnType());]@SuppressWarnings(\"unchecked\") TypeLiteral<T> returnType = (TypeLiteral<T>) TypeLiteral.get(typeResolver.getReturnType(method));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 3142,
		"linenumber" : 187,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(((stage == Stage.PRODUCTION) && (binding.getScope() == Scopes.SINGLETON)) || (binding.getLoadStrategy() == LoadStrategy.EAGER))](((stage == Stage.PRODUCTION) && (binding.getScope() == SINGLETON)) || (binding.getLoadStrategy() == LoadStrategy.EAGER))",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 3156,
		"linenumber" : 139,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "errors.withSource(StackTraceElements.forType(type)).scopeAnnotationOnAbstractType(scopeAnnotation, type, source);]errors.withSource(type).scopeAnnotationOnAbstractType(scopeAnnotation, type, source);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 3158,
		"linenumber" : 84,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Errors errors = new Errors(StackTraceElements.forMember(method));]Errors errors = new Errors(method);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 3164,
		"linenumber" : 546,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new LinkedProviderBindingImpl<T>(this, key, StackTraceElements.forType(type), Scopes.<T>scope(key, this, internalFactory, scope), scope, providerKey, loadStrategy);]new LinkedProviderBindingImpl<T>(this, key, type, Scopes.<T>scope(key, this, internalFactory, scope), scope, providerKey, loadStrategy);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 3185,
		"linenumber" : 159,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "binding = (OldVersionBinding) parentInjector.getBinding(key);]binding = (BindingImpl) parentInjector.getBinding(key);",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 3191,
		"linenumber" : 375,
		"changeype" : "RETURN_TYPE_CHANGE",
		"changeentity" : "PARAMETERIZED_TYPE",
		"changecontent" : "com.google.inject.InjectorImpl.ConvertedConstantBindingImpl.getOriginal(): OldVersionBinding<String>]com.google.inject.InjectorImpl.ConvertedConstantBindingImpl.getOriginal(): BindingImpl<String>",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 3192,
		"linenumber" : 362,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(BindingImpl<String>) originalBinding;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 3192,
		"linenumber" : 376,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(OldVersionBinding) originalBinding;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 3230,
		"linenumber" : 54,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "this(source, (\"An exception was caught and reported. Message: \" + throwable.getMessage()), ImmutableList.<InjectionPoint>of(), throwable);]this(source, (\"An exception was caught and reported. Message: \" + throwable.getMessage()), ImmutableList.<Dependency>of(), throwable);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 3252,
		"linenumber" : 388,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "List<InjectionPoint> injectionPoints = errorMessage.getInjectionPoints();]List<Dependency> dependencies = errorMessage.getDependencies();",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 3253,
		"linenumber" : 389,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int i = (injectionPoints.size() - 1);]int i = (dependencies.size() - 1);",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 3254,
		"linenumber" : 390,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "InjectionPoint injectionPoint = injectionPoints.get(i);]InjectionPoint injectionPoint = dependency.getInjectionPoint();",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 3254,
		"linenumber" : 391,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Dependency dependency = dependencies.get(i);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 3264,
		"linenumber" : 129,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "Parameter<?> parameter:entry.getValue().getParameters()]Dependency<?> dependency:entry.getValue().getInjectionPoint().getDependencies()",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 3265,
		"linenumber" : 130,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "out.writeImport(parameter.getKey().getTypeLiteral().getType());]out.writeImport(dependency.getKey().getTypeLiteral().getType());",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 3266,
		"linenumber" : 168,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Iterator<Parameter<?>> i = entry.getValue().getParameters().iterator();]Iterator<Dependency<?>> i = entry.getValue().getInjectionPoint().getDependencies().iterator();",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 3267,
		"linenumber" : 169,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Parameter<?> parameter = i.next();]Dependency<?> parameter = i.next();",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 3268,
		"linenumber" : 178,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "out.openScope(\"public %s<%s<?>> getParameters() {\", List.class, Parameter.class).openScope(\"return %s.<%s<?>>asList(\", Arrays.class, Parameter.class);]out.openScope(\"public %s<%s<?>> getParameters() {\", List.class, Dependency.class).openScope(\"return %s.<%s<?>>asList(\", Arrays.class, Dependency.class);",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 3374,
		"linenumber" : 54,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "this(source, (\"An exception was caught and reported. Message: \" + throwable.getMessage()), ImmutableList.<Dependency>of(), throwable);]this((\"An exception was caught and reported. Message: \" + throwable.getMessage()), throwable, ImmutableList.of(source));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 3399,
		"linenumber" : 674,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Errors errorsForMember = (injectionPoint.isOptional() ? new Errors(injectionPoint.getMember()) : errors.withSource(injectionPoint.getMember()));]Errors errorsForMember = (injectionPoint.isOptional() ? new Errors(injectionPoint) : errors);",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 3438,
		"linenumber" : 44,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "List<SingleMemberInjector> memberInjectorsList = injector.getMemberInjectors(implementation, errors);]List<SingleMemberInjector> memberInjectorsList = injector.injectors.get(implementation, errors);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 3441,
		"linenumber" : 57,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "this(message, null, ImmutableList.of(source));]this(ImmutableList.of(source), message, null);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 3442,
		"linenumber" : 61,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "this(message, (Throwable) null);]this(ImmutableList.of(), message, null);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 3443,
		"linenumber" : 297,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new Message(message.getMessage(), message.getCause(), stripDuplicates(sources));]new Message(stripDuplicates(sources), message.getMessage(), message.getCause());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 3444,
		"linenumber" : 336,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "addMessage(new Message(message, cause, stripDuplicates(sources)));]addMessage(new Message(stripDuplicates(sources), message, cause));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 3544,
		"linenumber" : 44,
		"changeype" : "PARAMETER_TYPE_CHANGE",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "memberInjector: CreationTimeMemberInjector]memberInjector: Initializer",
		"parententity" : "PARAMETER"
	},
	{
		"linetupleid" : 3556,
		"linenumber" : 339,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(injector, key, originalBinding.getSource(), new ConstantFactory<T>(value), Scopes.NO_SCOPE, LoadStrategy.LAZY);]super(injector, key, originalBinding.getSource(), new ConstantFactory<T>(Initializables.of(value)), Scopes.NO_SCOPE, LoadStrategy.LAZY);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 3677,
		"linenumber" : 57,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "InjectionPoint[] injectionPoints = new InjectionPoint[(memberInjectors.length + 1)];]InjectionPoint[] injectionPoints = new InjectionPoint[(memberInjectors.size() + 1)];",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 3690,
		"linenumber" : 60,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(sources.isEmpty() ? SourceProvider.UNKNOWN_SOURCE.toString() : Errors.sourceToString(sources.get((sources.size() - 1))));](sources.isEmpty() ? SourceProvider.UNKNOWN_SOURCE.toString() : Errors.convert(sources.get((sources.size() - 1))).toString());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 3727,
		"linenumber" : 56,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "errors.withSource(source).errorInProvider(userException).toException();]errors.errorInProvider(userException).toException();",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 3738,
		"linenumber" : 610,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Errors errorsForMember = (injectionPoint.isOptional() ? new Errors(injectionPoint) : errors);]Errors errorsForMember = (injectionPoint.isOptional() ? new Errors(injectionPoint) : errors.withSource(injectionPoint));",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 3739,
		"linenumber" : 613,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "SingleMemberInjector injector = ((injectionPoint.getMember() instanceof Field) ? new SingleFieldInjector(errorsForMember, this, injectionPoint) : new SingleMethodInjector(errorsForMember, this, injectionPoint));]SingleMemberInjector injector = ((injectionPoint.getMember() instanceof Field) ? new SingleFieldInjector(this, injectionPoint, errorsForMember) : new SingleMethodInjector(this, injectionPoint, errorsForMember));",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 3744,
		"linenumber" : 731,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "InternalFactory<? extends T> factory = getInternalFactory(dependency.getKey(), errors.withSource(dependency));]InternalFactory<? extends T> factory = getInternalFactory(dependency.getKey(), errors);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 3791,
		"linenumber" : 159,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((o instanceof InjectionPoint) && (member == (InjectionPoint) o.member));]((o instanceof InjectionPoint) && member.equals((InjectionPoint) o.member));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 3805,
		"linenumber" : 286,
		"changeype" : "PARAMETER_DELETE",
		"changeentity" : "PARAMETER",
		"changecontent" : "type",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 3806,
		"linenumber" : 289,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "M member:factory.getMembers(type)]M member:factory.getMembers(typeResolver.getRawType())",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 3849,
		"linenumber" : 155,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "state.lock();",
		"parententity" : "SYNCHRONIZED_STATEMENT"
	},
	{
		"linetupleid" : 3849,
		"linenumber" : 155,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SYNCHRONIZED_STATEMENT",
		"changecontent" : "jitBindings]state.lock()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 3868,
		"linenumber" : 292,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "M member:factory.getMembers(typeResolver.getRawType())]M member:factory.getMembers(MoreTypes.getRawType(typeResolver.getType()))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 3879,
		"linenumber" : 53,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "List<InjectionPoint> injectionPointsList = Lists.newArrayList();]Set<InjectionPoint> injectionPoints;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 3897,
		"linenumber" : 157,
		"changeype" : "RETURN_TYPE_CHANGE",
		"changeentity" : "PARAMETERIZED_TYPE",
		"changecontent" : "com.google.inject.TypeLiteral.resolveAll(Type[]): List<Type>]com.google.inject.TypeLiteral.resolveAll(Type[]): List<TypeLiteral<?>>",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 3898,
		"linenumber" : 158,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Type[] result = new Type[types.length];]TypeLiteral<?>[] result = new TypeLiteral<?>[types.length];",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 3923,
		"linenumber" : 119,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "@SuppressWarnings(\"unchecked\") TypeLiteral<T> returnType = (TypeLiteral<T>) TypeLiteral.get(typeLiteral.getReturnType(method));]@SuppressWarnings(\"unchecked\") TypeLiteral<T> returnType = (TypeLiteral<T>) typeLiteral.getReturnType(method);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 4028,
		"linenumber" : 191,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(((stage == Stage.PRODUCTION) && (binding.getScope() == com.google.inject.Scopes.SINGLETON)) || (binding.getLoadStrategy() == LoadStrategy.EAGER))](((stage == Stage.PRODUCTION) && (binding.getScope() == Scopes.SINGLETON)) || (binding.getLoadStrategy() == LoadStrategy.EAGER))",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 4040,
		"linenumber" : 104,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "newMapBinder(binder, valueType, Key.get(MapBinder.<K, V>mapOf(keyType, valueType)), Key.get(MapBinder.<K, V>mapOfProviderOf(keyType, valueType)), Multibinder.<Entry<K, Provider<V>>>newSetBinder(binder, entryOfProviderOf(keyType, valueType)));]newMapBinder(binder, valueType, Key.get(mapOf(keyType, valueType)), Key.get(mapOfProviderOf(keyType, valueType)), Multibinder.newSetBinder(binder, entryOfProviderOf(keyType, valueType)));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 4106,
		"linenumber" : 59,
		"changeype" : "ADDITIONAL_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "com.google.inject.servlet.GuiceFilter.pipeline : FilterPipeline",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 4106,
		"linenumber" : 59,
		"changeype" : "REMOVED_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "com.google.inject.servlet.GuiceFilter.pipeline : WeakReference<FilterPipeline>",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 4107,
		"linenumber" : 71,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(GuiceFilter.pipeline.get() instanceof ManagedFilterPipeline)](GuiceFilter.pipeline instanceof ManagedFilterPipeline)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 4219,
		"linenumber" : 528,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "protected",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 4219,
		"linenumber" : 528,
		"changeype" : "ADDING_METHOD_OVERRIDABILITY",
		"changeentity" : "MODIFIER",
		"changecontent" : "final",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 4284,
		"linenumber" : 30,
		"changeype" : "UNCLASSIFIED_CHANGE",
		"changeentity" : "TYPE_PARAMETER",
		"changecontent" : "T",
		"parententity" : "TYPE_PARAMETERS"
	},
	{
		"linetupleid" : 4284,
		"linenumber" : 30,
		"changeype" : "PARENT_INTERFACE_CHANGE",
		"changeentity" : "PARAMETERIZED_TYPE",
		"changecontent" : "Binding<Provider<T>>]Binding<T>",
		"parententity" : "SUPER_INTERFACE_TYPES"
	},
	{
		"linetupleid" : 4402,
		"linenumber" : 238,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "Map.Entry<Key<?>, Binding<?>> entry:injector.getBindings().entrySet()]Binding<?> entry:injector.findBindingsByType(elementType)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 4420,
		"linenumber" : 27,
		"changeype" : "ATTRIBUTE_TYPE_CHANGE",
		"changeentity" : "PARAMETERIZED_TYPE",
		"changecontent" : "ReferenceCache<K, Object>",
		"parententity" : "FIELD"
	},
	{
		"linetupleid" : 4452,
		"linenumber" : 125,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "binder.withSource(element.getSource()).bindInterceptor(element.getClassMatcher(), element.getMethodMatcher(), interceptors.toArray(new MethodInterceptor[interceptors.size()]));]binder.withSource(element.getSource()).bindInterceptor(element.getClassMatcher(), element.getMethodMatcher(), interceptors.toArray(new org.aopalliance.intercept.MethodInterceptor[interceptors.size()]));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 4482,
		"linenumber" : 54,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < parameterTypes.length)](i < parameterTypes.size())",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 4483,
		"linenumber" : 55,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Parameter parameter = new Parameter(parameterTypes[i], annotations[i]);]Parameter parameter = new Parameter(parameterTypes.get(i).getType(), annotations[i]);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 4486,
		"linenumber" : 227,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "newConfigurationException(StringLiteralConcatenation{\"Constructor mismatch: %s has %s @AssistedInject \"+\n\"constructors, factory %s has %s creation methods\"+\n}, implementationType.getSimpleName(), constructors.size(), factoryType.getSimpleName(), factoryType.getMethods().length);]newConfigurationException(StringLiteralConcatenation{\"Constructor mismatch: %s has %s @AssistedInject \"+\n\"constructors, factory %s has %s creation methods\"+\n}, implementationType, constructors.size(), factoryType, factoryMethods.length);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 4494,
		"linenumber" : 126,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "factory = factoryType.cast(Proxy.newProxyInstance(factoryType.getClassLoader(), new Class[]{factoryType}, this));]factory = factoryRawType.cast(Proxy.newProxyInstance(factoryRawType.getClassLoader(), new Class[]{factoryRawType}, this));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 4496,
		"linenumber" : 109,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((classLoader != null) ? classLoader : ClassLoader.getSystemClassLoader());]((classLoader != null) ? classLoader : checkNotNull(getSystemClassLoaderOrNull(), \"Couldn\\\'t get a ClassLoader\"));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 4685,
		"linenumber" : 101,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "errors.withSource(constructionProxy.getInjectionPoint()).errorNotifyingInjectionListener(injectionListener, injectableType, e).toException();]errors.errorNotifyingInjectionListener(injectionListener, injectableType.getType(), e).toException();",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 4805,
		"linenumber" : 64,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "parameters[(i ++)] = parameterInjector.inject(errors, context);]parameters[i] = parameterInjector.inject(errors, context);",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 4816,
		"linenumber" : 380,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "merge(moreErrors.errors);]merge(moreErrors.root.errors);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 4854,
		"linenumber" : 192,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "binding.getScoping().isEagerSingleton(stage)]isEagerSingleton(injector, binding, stage)",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 4865,
		"linenumber" : 140,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.sourceProvider = new SourceProvider().plusSkippedClasses(Elements.class, RecordingBinder.class, AbstractModule.class, ConstantBindingBuilderImpl.class, AbstractBindingBuilder.class, BindingBuilder.class);]this.sourceProvider = SourceProvider.DEFAULT_INSTANCE.plusSkippedClasses(Elements.class, RecordingBinder.class, AbstractModule.class, ConstantBindingBuilderImpl.class, AbstractBindingBuilder.class, BindingBuilder.class);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 4893,
		"linenumber" : 39,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(injector, key, source, internalFactory, Scoping.UNSCOPED);]super(injector, key, source, internalFactory, Scoping.EAGER_SINGLETON);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 4941,
		"linenumber" : 85,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.hashCode = MoreTypes.hashCode(type);]this.hashCode = type.hashCode();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 4990,
		"linenumber" : 412,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! inject.optional())](! optional)",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 5028,
		"linenumber" : 363,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "false;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 5028,
		"linenumber" : 369,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 5031,
		"linenumber" : 524,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! injectableMember.optional)",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 5159,
		"linenumber" : 103,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "FilterPipeline filterPipeline = pipeline;]FilterPipeline filterPipeline = ((null != injectedPipeline) ? injectedPipeline : pipeline);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 5167,
		"linenumber" : 368,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "factoryRawType.cast(Proxy.newProxyInstance(factoryRawType.getClassLoader(), new Class[]{factoryRawType}, invocationHandler));]factoryRawType.cast(Proxy.newProxyInstance(BytecodeGen.getClassLoader(factoryRawType), new Class[]{factoryRawType}, invocationHandler));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 5174,
		"linenumber" : 84,
		"changeype" : "ATTRIBUTE_RENAMING",
		"changeentity" : "FIELD",
		"changecontent" : "com.google.inject.internal.BytecodeGen.HOOK_ENABLED : boolean",
		"parententity" : "FIELD"
	},
	{
		"linetupleid" : 5174,
		"linenumber" : 89,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "private",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 5264,
		"linenumber" : 48,
		"changeype" : "REMOVED_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "com.google.inject.persist.PersistModule.usingJpa(String,Properties)",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 5264,
		"linenumber" : 57,
		"changeype" : "ADDITIONAL_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "com.google.inject.persist.PersistModule.setTransactional(Class<? extends Annotation>)",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 5294,
		"linenumber" : 55,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "bind(EntityManagerFactory.class).toProvider(EntityManagerProvider.EntityManagerFactoryProvider.class);]bind(EntityManagerFactory.class).toProvider(JpaPersistService.EntityManagerFactoryProvider.class);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 5359,
		"linenumber" : 49,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "Preconditions.checkArgument(((null != jpaUnit) && (! jpaUnit.isEmpty())), \"JPA unit name must be a non-empty string.\");]Preconditions.checkArgument(((null != jpaUnit) && (jpaUnit.length() > 0)), \"JPA unit name must be a non-empty string.\");",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 5405,
		"linenumber" : 75,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "actual.add(new Params(binding.getPattern(), binding.getFilterInstance(), binding.getInitParams(), binding.getUriPatternType()));]actual.add(new Params(binding, binding.getFilterInstance()));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 5416,
		"linenumber" : 76,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "ThrowingProvides throwingProvides = (ThrowingProvides) method.getAnnotation(ThrowingProvides.class);]CheckedProvides checkedProvides = (CheckedProvides) method.getAnnotation(CheckedProvides.class);",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 5417,
		"linenumber" : 78,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(throwingProvides != null)](checkedProvides != null)",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 5418,
		"linenumber" : 79,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "result.add(createProviderMethod(binder, method, throwingProvides.value()));]result.add(createProviderMethod(binder, method, checkedProvides.value()));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 5483,
		"linenumber" : 124,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(shellBuilder.getInjectorOptions().stage == Stage.TOOL)](shellBuilder.getStage() == Stage.TOOL)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 5588,
		"linenumber" : 506,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(binding instanceof ConstructorBindingImpl<?>)](binding instanceof DelayedInitialize)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 5589,
		"linenumber" : 507,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "(ConstructorBindingImpl) binding.initialize(this, errors);](DelayedInitialize) binding.initialize(this, errors);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 5602,
		"linenumber" : 35,
		"changeype" : "ADDITIONAL_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "com.google.inject.internal.ProviderInternalFactory.provisionCallback : ProvisionListenerStackCallback<T>",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 5665,
		"linenumber" : 121,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String paramString = Join.join(\", \", paramStrings);]String paramString = Joiner.on(\", \").join(paramStrings);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 5706,
		"linenumber" : 31,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "bind(DancePartyFactory.class).toProvider(FactoryProvider.newFactory(DancePartyFactory.class, DancePartyImpl.class));]install(new FactoryModuleBuilder().implement(DanceParty.class, DancePartyImpl.class).build(DancePartyFactory.class));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 5971,
		"linenumber" : 368,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(List) bindings;](List<Binding<?>>) (List<?>) bindings;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 5990,
		"linenumber" : 32,
		"changeype" : "PARAMETER_TYPE_CHANGE",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "type: Type",
		"parententity" : "PARAMETER"
	},
	{
		"linetupleid" : 5990,
		"linenumber" : 32,
		"changeype" : "PARAMETER_ORDERING_CHANGE",
		"changeentity" : "PARAMETER",
		"changecontent" : "setName",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 5990,
		"linenumber" : 91,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "private",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 5990,
		"linenumber" : 91,
		"changeype" : "PARAMETER_INSERT",
		"changeentity" : "PARAMETER",
		"changecontent" : "mapKey",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 5991,
		"linenumber" : 33,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "uniqueId = nextUniqueId.getAndIncrement();]this.uniqueId = nextUniqueId.incrementAndGet();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 5995,
		"linenumber" : 218,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "requestInjection((TypeLiteral) TypeLiteral.get(instance.getClass()), instance);]requestInjection((TypeLiteral<Object>) TypeLiteral.get(instance.getClass()), instance);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 5997,
		"linenumber" : 595,
		"changeype" : "ADDING_ATTRIBUTE_MODIFIABILITY",
		"changeentity" : "MODIFIER",
		"changecontent" : "final",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 6033,
		"linenumber" : 83,
		"changeype" : "METHOD_RENAMING",
		"changeentity" : "METHOD",
		"changecontent" : "com.google.inject.internal.InheritingState.getScope(Class<? extends Annotation>)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6033,
		"linenumber" : 83,
		"changeype" : "RETURN_TYPE_CHANGE",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "com.google.inject.internal.InheritingState.getScopeBinding(Class<? extends Annotation>): Scope]com.google.inject.internal.InheritingState.getScopeBinding(Class<? extends Annotation>): ScopeBinding",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6034,
		"linenumber" : 84,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Scope scope = scopes.get(annotationType);]ScopeBinding scopeBinding = scopes.get(annotationType);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6035,
		"linenumber" : 85,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((scope != null) ? scope : parent.getScope(annotationType));]((scopeBinding != null) ? scopeBinding : parent.getScopeBinding(annotationType));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6068,
		"linenumber" : 167,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int size = (moduleSource.getStackTraceSize() + partialCallStack.length);]int size = (moduleSource.getStackTraceSize() + chunkSize);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6078,
		"linenumber" : 118,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((source == SourceProvider.UNKNOWN_SOURCE) ? this : new Errors(this, source));](((source == this.source) || (source == SourceProvider.UNKNOWN_SOURCE)) ? this : new Errors(this, source));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6111,
		"linenumber" : 271,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new Properties();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6111,
		"linenumber" : 271,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "null;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6113,
		"linenumber" : 33,
		"changeype" : "REMOVED_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "Bootstrapper.baseUrl : String",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 6113,
		"linenumber" : 37,
		"changeype" : "ADDITIONAL_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "Bootstrapper.remoteRepos : List",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 6114,
		"linenumber" : 213,
		"changeype" : "STATEMENT_ORDERING_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "destinationFile.exists()",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 6114,
		"linenumber" : 213,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "destinationFile.exists()](destinationFile.exists() && (! file.endsWith(SNAPSHOT_SIGNATURE)))",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 6116,
		"linenumber" : 182,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "writer.write(res.toString());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6117,
		"linenumber" : 246,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "remoteRepos.add((String) st.nextToken().trim());]remoteRepos.add(st.nextToken().trim());",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 6118,
		"linenumber" : 70,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "mavenRepoLocalProperty = (System.getProperty(\"user.home\") + \"/maven/repository\");]mavenRepoLocalProperty = (System.getProperty(\"user.home\") + \"/.maven/repository\");",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 6121,
		"linenumber" : 119,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "classPath.append((((mavenRepoLocal + \"/\") + getArtifactPath(d, \"/\")) + \":\"));]classPath.append((((downloader.getMavenRepoLocal() + \"/\") + getArtifactPath(d, \"/\")) + \":\"));",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 6123,
		"linenumber" : 181,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "writeFile(\"bootstrap.repo\", mavenRepoLocal.getPath());]writeFile(\"bootstrap.repo\", downloader.getMavenRepoLocal().getPath());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6124,
		"linenumber" : 83,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(unitTests != null)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6124,
		"linenumber" : 90,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(size == 0)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6130,
		"linenumber" : 589,
		"changeype" : "ATTRIBUTE_RENAMING",
		"changeentity" : "FIELD",
		"changecontent" : "Bootstrapper.UnitTests.includes : List",
		"parententity" : "FIELD"
	},
	{
		"linetupleid" : 6131,
		"linenumber" : 595,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "this.includes.add(pattern);]unitTestIncludes.add(pattern);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6136,
		"linenumber" : 289,
		"changeype" : "UNCLASSIFIED_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "static",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 6137,
		"linenumber" : 302,
		"changeype" : "UNCLASSIFIED_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "static",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 6138,
		"linenumber" : 385,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String extend = getBodyText();]String extend = interpolate(getBodyText(), properties);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 6139,
		"linenumber" : 93,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "classPath.append((((downloader.getMavenRepoLocal() + \"/\") + getArtifactPath(d, \"/\")) + \":\"));]classPath.append((((repoLocal + \"/\") + getArtifactPath(d, \"/\")) + classpathSeparator));",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 6141,
		"linenumber" : 128,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "List files = FileUtils.getFileNames(resourceDirectory, listToString(resource.getIncludes()), listToString(resource.getExcludes()), false);]List files = FileUtils.getFileNames(resourceDirectory, includes, listToString(resource.getExcludes()), false);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 6145,
		"linenumber" : 417,
		"changeype" : "RETURN_TYPE_CHANGE",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "Bootstrapper.BootstrapPomParser.parse(File): void]Bootstrapper.BootstrapPomParser.parse(File): boolean",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6146,
		"linenumber" : 471,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "rawName.equals(\"extend\")",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6146,
		"linenumber" : 471,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "rawName.equals(\"extend\")]rawName.equals(\"dependency\")",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 6146,
		"linenumber" : 496,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "rawName.equals(\"parent\")",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6153,
		"linenumber" : 54,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! bootstrapPomParser.parse(new File(\"project.xml\")))](! bootstrapPomParser.parse(new File(\"pom.xml\")))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6155,
		"linenumber" : 523,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new SAXException(\"Could not parse parent project.xml\");]new SAXException(\"Could not parse parent pom.xml\");",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 6158,
		"linenumber" : 106,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new VerificationException((\"Expected file was not found: \" + line));]new VerificationException((\"Expected file was not found: \" + expectedFile.getPath()));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 6164,
		"linenumber" : 97,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "surefireBooter.addClassPathUrl(new File(basedir, \"target/classes\").getPath());]surefireBooter.addClassPathUrl(new File(basedir, classesDirectory).getPath());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6166,
		"linenumber" : 35,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "sb.append(compilerError);]sb.append(compilerError).append(LS);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 6168,
		"linenumber" : 66,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String goal = ((type + \":\") + type);]String goal = (type + \":install\");",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6172,
		"linenumber" : 47,
		"changeype" : "RETURN_TYPE_CHANGE",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "Exception]IOException",
		"parententity" : "THROW"
	},
	{
		"linetupleid" : 6175,
		"linenumber" : 238,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "parsedUrl[2] = (\"http://\" + url.substring((i + 1)));]parsedUrl[2] = (protocol + url.substring((i + 1)));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 6176,
		"linenumber" : 101,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(destinationFile.exists() && (! file.endsWith(SNAPSHOT_SIGNATURE)))](destinationFile.exists() && (file.indexOf(SNAPSHOT_SIGNATURE) < 0))",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 6180,
		"linenumber" : 17,
		"changeype" : "METHOD_RENAMING",
		"changeentity" : "METHOD",
		"changecontent" : "org.apache.maven.plugin.plugin.AbstractPluginMojo.execute(PluginExecutionRequest,PluginExecutionResponse)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6180,
		"linenumber" : 17,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 6180,
		"linenumber" : 17,
		"changeype" : "PARAMETER_DELETE",
		"changeentity" : "PARAMETER",
		"changecontent" : "response",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 6180,
		"linenumber" : 17,
		"changeype" : "RETURN_TYPE_CHANGE",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "org.apache.maven.plugin.plugin.AbstractPluginMojo.getJarFile(PluginExecutionRequest): void]org.apache.maven.plugin.plugin.AbstractPluginMojo.getJarFile(PluginExecutionRequest): File",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6190,
		"linenumber" : 142,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(args.length == 1)",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 6191,
		"linenumber" : 168,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "FileUtils.mkdir(new File(bin).getPath());",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 6201,
		"linenumber" : 182,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "mavenHome = System.getProperty(\"M2_HOME\");]mavenHome = properties.getProperty(\"maven.home\");",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 6202,
		"linenumber" : 48,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "properties = loadProperties(new File(System.getProperty(\"user.home\"), \"build.properties\"));]properties = loadProperties(new File(System.getProperty(\"user.home\"), \"maven.properties\"));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6214,
		"linenumber" : 132,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CATCH_CLAUSE",
		"changecontent" : "ArtifactCollectionException]TransitiveArtifactResolutionException",
		"parententity" : "CATCH_CLAUSES"
	},
	{
		"linetupleid" : 6218,
		"linenumber" : 209,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new TransitiveArtifactResolutionException(\"Error retrieving metadata: \", e);",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 6218,
		"linenumber" : 212,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new ArtifactCollectionException(\"Problem building project: \", e);",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 6221,
		"linenumber" : 73,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "sb.append(\"The artifact is not present locally as:\").append(\"\\n\").append(artifact.getPath()).append(\"\\n\").append(\"or in any of the specified remote repositories:\").append(\"\\n\");]sb.append(\"The artifact is not present locally as:\").append(LS).append(LS).append(artifact.getPath()).append(LS).append(LS).append(\"or in any of the specified remote repositories:\").append(LS).append(LS);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6230,
		"linenumber" : 137,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "temp = File.createTempFile(\"wagon\", \"tmp\");",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 6230,
		"linenumber" : 139,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "temp = new File((destination + \".tmp\"));",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 6231,
		"linenumber" : 33,
		"changeype" : "PARAMETER_TYPE_CHANGE",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "context: MavenLifecycleContext",
		"parententity" : "PARAMETER"
	},
	{
		"linetupleid" : 6244,
		"linenumber" : 114,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "context = new MavenLifecycleContext(container, project, getMojoDescriptor(goal), getLocalRepository());]context = new MavenGoalExecutionContext(container, project, getMojoDescriptor(goal), getLocalRepository());",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 6252,
		"linenumber" : 48,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "pluginManager = (PluginManager) context.getContainer().lookup(PluginManager.ROLE);]pluginManager = (PluginManager) context.lookup(PluginManager.ROLE);",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 6254,
		"linenumber" : 34,
		"changeype" : "PARAMETER_INSERT",
		"changeentity" : "PARAMETER",
		"changecontent" : "session",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 6254,
		"linenumber" : 47,
		"changeype" : "PARAMETER_DELETE",
		"changeentity" : "PARAMETER",
		"changecontent" : "container",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 6255,
		"linenumber" : 72,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "container.lookup(role);]session.lookup(role);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6256,
		"linenumber" : 75,
		"changeype" : "PARAMETER_RENAMING",
		"changeentity" : "PARAMETER",
		"changecontent" : "roleHint]hint",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 6256,
		"linenumber" : 75,
		"changeype" : "PARAMETER_TYPE_CHANGE",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "roleHint: String]hint: String",
		"parententity" : "PARAMETER"
	},
	{
		"linetupleid" : 6257,
		"linenumber" : 78,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "container.lookup(role, roleHint);]session.lookup(role, hint);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6260,
		"linenumber" : 115,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int i = 1;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 6260,
		"linenumber" : 115,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "i ++;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 6260,
		"linenumber" : 115,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < lineage.size())",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 6260,
		"linenumber" : 118,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "i.hasNext()",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 6260,
		"linenumber" : 118,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Iterator i = lineage.iterator();",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 6263,
		"linenumber" : 29,
		"changeype" : "PARAMETER_INSERT",
		"changeentity" : "PARAMETER",
		"changecontent" : "session",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 6263,
		"linenumber" : 32,
		"changeype" : "PARAMETER_DELETE",
		"changeentity" : "PARAMETER",
		"changecontent" : "context",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 6269,
		"linenumber" : 75,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Artifact pomArtifact = new DefaultArtifact(project.getGroupId(), project.getArtifactId(), project.getVersion(), project.getType());]Artifact pomArtifact = new DefaultArtifact(project.getGroupId(), project.getArtifactId(), project.getVersion(), \"pom\");",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6290,
		"linenumber" : 366,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "container = (PlexusContainer) context.get(PlexusConstants.PLEXUS_KEY);]container = (ArtifactEnabledContainer) context.get(PlexusConstants.PLEXUS_KEY);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6294,
		"linenumber" : 58,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Embedder embedder = new Embedder();]ArtifactEnabledEmbedder embedder = new ArtifactEnabledEmbedder();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6311,
		"linenumber" : 26,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "List files = FileUtils.getFiles(getRepository(), (((\"*/\" + type) + \"s/*.\") + type), \"\");]List files = FileUtils.getFiles(getRepository(), (((\"tambora*/\" + type) + \"s/*.\") + type), \"\");",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6315,
		"linenumber" : 205,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(isEmpty(version) && isEmpty(v3ParentModel.getCurrentVersion()))](isEmpty(version) && ((v3ParentModel == null) || isEmpty(v3ParentModel.getCurrentVersion())))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6327,
		"linenumber" : 210,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(pluginDescriptors.get(pluginId) != null);]pluginDescriptors.containsKey(pluginId);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6339,
		"linenumber" : 145,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Iterator i = getRemoteRepo().iterator();]Iterator i = getRemoteRepos().iterator();",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 6340,
		"linenumber" : 207,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "log(((\"Error retrieving artifact from [\" + url) + \"]: \"));]log((((\"Error retrieving artifact from [\" + url) + \"]: \") + e));",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 6341,
		"linenumber" : 49,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "value = context.getLocalRepository();]value = context.getSession().getLocalRepository();",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 6345,
		"linenumber" : 309,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new ProjectBuildingException(\"Missing parent POM: \", e);]new ProjectBuildingException((((((\"Missing parent POM: \" + parent.getGroupId()) + \":\") + parent.getArtifactId()) + \"-\") + parent.getVersion()), e);",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 6359,
		"linenumber" : 176,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String onlineProperty = properties.getProperty(\"maven.online\");]String onlineProperty = System.getProperty(\"maven.online\", reader.getLocal().getOnline());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6360,
		"linenumber" : 36,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "protected",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 6360,
		"linenumber" : 36,
		"changeype" : "RETURN_TYPE_CHANGE",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "org.apache.maven.project.inheritance.ProjectInheritanceTestCase.getLocalRepository(): ArtifactRepository]org.apache.maven.project.inheritance.ProjectInheritanceTestCase.getLocalRepository(): String",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6367,
		"linenumber" : 24,
		"changeype" : "PARAMETER_DELETE",
		"changeentity" : "PARAMETER",
		"changecontent" : "mavenRepoLocal",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 6367,
		"linenumber" : 34,
		"changeype" : "PARAMETER_INSERT",
		"changeentity" : "PARAMETER",
		"changecontent" : "homeDir",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 6373,
		"linenumber" : 30,
		"changeype" : "REMOVED_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "org.apache.maven.it.Verifier.homeDir : File",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 6373,
		"linenumber" : 37,
		"changeype" : "REMOVING_ATTRIBUTE_MODIFIABILITY",
		"changeentity" : "MODIFIER",
		"changecontent" : "final",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 6374,
		"linenumber" : 67,
		"changeype" : "RETURN_TYPE_CHANGE",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "org.apache.maven.it.Verifier.retrieveLocalRepo(): void]org.apache.maven.it.Verifier.retrieveLocalRepo(): String",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6374,
		"linenumber" : 155,
		"changeype" : "ADDITIONAL_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "org.apache.maven.it.Verifier.executeCommand(String)",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 6375,
		"linenumber" : 89,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String urlString = (\"jar:file:\" + line);]String urlString = (((\"jar:file:\" + basedir) + \"/\") + line);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 6379,
		"linenumber" : 88,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "0;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 6379,
		"linenumber" : 88,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 6389,
		"linenumber" : 90,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "List unitTestResources = build.getResources();]List unitTestResources = build.getUnitTest().getResources();",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 6391,
		"linenumber" : 118,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(((localRepositoryValue == null) && (userModel.getLocal() != null)) && (userModel.getLocal().getRepository() != null))]((userModel.getLocal() != null) && (userModel.getLocal().getRepository() != null))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 6393,
		"linenumber" : 324,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((((((d.getArtifactId().equals(\"classworlds\") || d.artifactId.equals(\"plexus\")) || d.artifactId.equals(\"xstream\")) || d.artifactId.equals(\"xpp3\")) || d.artifactId.equals(\"junit\")) || d.artifactId.equals(\"wagon-api\")) || d.artifactId.equals(\"maven-artifact\"))](((d.getArtifactId().equals(\"classworlds\") || d.artifactId.equals(\"plexus\")) || d.artifactId.equals(\"xstream\")) || d.artifactId.equals(\"xpp3\"))",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 6401,
		"linenumber" : 119,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String test = (String) request.getParameter(\"test\");",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6411,
		"linenumber" : 46,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "context = new MavenGoalExecutionContext(session, session.getPluginManager().getMojoDescriptor(goal));]context = new MavenGoalExecutionContext(session, goal);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 6412,
		"linenumber" : 54,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "response.setExecutionFailure(context.getMojoDescriptor().getId(), context.getFailureResponse());]response.setExecutionFailure(context.getGoalName(), context.getFailureResponse());",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 6414,
		"linenumber" : 32,
		"changeype" : "PARAMETER_INSERT",
		"changeentity" : "PARAMETER",
		"changecontent" : "goalName",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 6414,
		"linenumber" : 34,
		"changeype" : "PARAMETER_DELETE",
		"changeentity" : "PARAMETER",
		"changecontent" : "goal",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 6416,
		"linenumber" : 163,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "List allPreGoals = project.getModel().getPreGoals();]List allPreGoals = project.getPreGoals();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6428,
		"linenumber" : 134,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! test.equals(\"#test\"))](test != null)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6431,
		"linenumber" : 148,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "message.append((\"The \" + parameter.getName())).append(\" is required for the execution of the \").append(mojo.getId()).append(\" mojo and cannot be null.\");]message.append((\"The \\\'\" + parameter.getName())).append(\"\\\' parameter is required for the execution of the \").append(mojo.getId()).append(\" mojo and cannot be null.\");",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6470,
		"linenumber" : 123,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(child.getScm() == null)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6470,
		"linenumber" : 123,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(child.getScm() == null)]StringUtils.isEmpty(childScm.getUrl())",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 6470,
		"linenumber" : 126,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(parent.getScm() != null)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6474,
		"linenumber" : 310,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "URL classWorldsUrl = new URL(((\"file:\" + mavenHome) + \"/core/classworlds-1.1-SNAPSHOT.jar\"));]URL classWorldsUrl = new URL(((\"file:\" + mavenHome) + \"/core/boot/classworlds-1.1-SNAPSHOT.jar\"));",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 6478,
		"linenumber" : 204,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "MavenMetadataSource sr = new MavenMetadataSource(remotePluginRepositories, localRepository, artifactResolver);]MavenMetadataSource metadataSource = new MavenMetadataSource(remotePluginRepositories, localRepository, artifactResolver);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6479,
		"linenumber" : 206,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "container.addComponent(pluginArtifact, artifactResolver, remotePluginRepositories, localRepository, sr, artifactFilter);](ArtifactEnabledContainer) container.addComponent(pluginArtifact, artifactResolver, remotePluginRepositories, localRepository, metadataSource, artifactFilter);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6492,
		"linenumber" : 76,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "artifacts = createArtifacts(model.getDependencies(), localRepository);]artifacts = createArtifacts(model, localRepository);",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 6513,
		"linenumber" : 70,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "File projectFile;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6513,
		"linenumber" : 76,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "File userConfigurationDirectory = getUserConfigurationDirectory();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6516,
		"linenumber" : 55,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String methodName = (\"get\" + StringUtils.capitalise(token));]String methodName = (\"get\" + StringUtils.capitalizeFirstLetter(token));",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 6523,
		"linenumber" : 114,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "project = getProject(pom);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 6523,
		"linenumber" : 126,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "project = projectBuilder.build(mavenLocalHome, pom);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 6552,
		"linenumber" : 25,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Date finish = null;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6552,
		"linenumber" : 29,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Date fullStart = new Date();]Date start = null;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6587,
		"linenumber" : 155,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "element(w, \"defaultValue\", parameter.getDescription());]element(w, \"defaultValue\", parameter.getDefaultValue());",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 6607,
		"linenumber" : 24,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int i = 0;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 6607,
		"linenumber" : 24,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "i ++;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 6607,
		"linenumber" : 24,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < classpathElements.length)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6607,
		"linenumber" : 30,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "it.hasNext()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6607,
		"linenumber" : 30,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Iterator it = classpathElements.iterator();",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 6628,
		"linenumber" : 11,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 6628,
		"linenumber" : 11,
		"changeype" : "UNCLASSIFIED_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "static",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 6628,
		"linenumber" : 11,
		"changeype" : "ADDING_ATTRIBUTE_MODIFIABILITY",
		"changeentity" : "MODIFIER",
		"changecontent" : "final",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 6701,
		"linenumber" : 108,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "result = result.replaceAll(wholeExpr, value);]result = StringUtils.replace(result, wholeExpr, value);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 6742,
		"linenumber" : 114,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(j <= i)](j <= index)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6743,
		"linenumber" : 118,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(p.getGoal() != null)](p.getGoals() != null)",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 6744,
		"linenumber" : 29,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "private",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 6750,
		"linenumber" : 43,
		"changeype" : "ADDITIONAL_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "org.apache.maven.plugin.jar.AbstractJarMojo.getManifest(PluginExecutionRequest)",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 6750,
		"linenumber" : 95,
		"changeype" : "REMOVED_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "org.apache.maven.plugin.jar.AbstractJarMojo.addDirectory(Map,File)",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 6758,
		"linenumber" : 155,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((getBuild().getSourceDirectory() + PS) + compileSourceRoots);]((getBuild().getSourceDirectory() + File.pathSeparator) + compileSourceRoots);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6795,
		"linenumber" : 376,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "value = parameter.getDefaultValue();]value = PluginParameterExpressionEvaluator.evaluate(parameter.getDefaultValue(), session);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 6796,
		"linenumber" : 940,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((((d.getArtifactDirectory() + pathSeparator) + \"jars\") + pathSeparator) + d.getArtifact());](((((d.getArtifactDirectory() + pathSeparator) + d.getType()) + \"s\") + pathSeparator) + d.getArtifact());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6837,
		"linenumber" : 236,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 6838,
		"linenumber" : 238,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String type = artifact.getType().trim();]String type = artifact.getType();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6839,
		"linenumber" : 240,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((type.equals(\"jar\") || type.equals(\"ejb\")) || type.equals(\"test\"))](\"jar\".equals(type) || \"ejb\".equals(type))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6859,
		"linenumber" : 60,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "this(groupId, artifactId, version, null, type, extension);]this(groupId, artifactId, version, SCOPE_RUNTIME, type, extension);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6871,
		"linenumber" : 235,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CATCH_CLAUSE",
		"changecontent" : "FileNotFoundException]Exception",
		"parententity" : "CATCH_CLAUSES"
	},
	{
		"linetupleid" : 6881,
		"linenumber" : 117,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Artifact artifact = new DefaultArtifact(dependency.getGroupId(), dependency.getArtifactId(), dependency.getVersion(), dependency.getScope(), dependency.getType(), dependency.getType());]Artifact artifact = new DefaultArtifact(dependency.getGroupId(), dependency.getArtifactId(), dependency.getVersion(), transitiveScope(dependency.getScope(), scope), dependency.getType(), dependency.getType());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6901,
		"linenumber" : 81,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "artifacts = createArtifacts(project.getDependencies(), artifact.getScope(), localRepository);]artifacts = artifactFactory.createArtifacts(project.getDependencies(), localRepository, artifact.getScope());",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 6910,
		"linenumber" : 60,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "createArtifacts(model.getDependencies(), artifact.getScope(), localRepository);]artifactFactory.createArtifacts(model.getDependencies(), localRepository, artifact.getScope());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 6927,
		"linenumber" : 99,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new ArtifactMetadataRetrievalException((\"Cannot read artifact source: \" + metadataArtifact.getFile()), e);]new ArtifactMetadataRetrievalException((\"Cannot read artifact source: \" + metadataArtifact.getPath()), e);",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 6979,
		"linenumber" : 59,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "pluginMap.put(plugin.getId(), plugin);]pluginMap.put(constructPluginKey(plugin), plugin);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 7010,
		"linenumber" : 529,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "b.toString();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 7010,
		"linenumber" : 547,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((b.length() > 0) ? b.toString() : null);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 7024,
		"linenumber" : 131,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "List files = FileUtils.getFileNames(resourceDirectory, includes, listToString(excludes), false);]List files = FileUtils.getFileNames(resourceDirectory, includes, excludes, false);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 7026,
		"linenumber" : 240,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! mappedChildPlugins.containsKey(plugin.getId()))](! mappedChildPlugins.containsKey(constructPluginKey(plugin)))",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 7027,
		"linenumber" : 246,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Plugin childPlugin = (Plugin) mappedChildPlugins.get(plugin.getId());]Plugin childPlugin = (Plugin) mappedChildPlugins.get(constructPluginKey(plugin));",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 7077,
		"linenumber" : 45,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "injectPluginDefaults(model.getBuild().getPlugins(), model.getPluginManagement());]injectPluginDefaults(model.getBuild().getPlugins(), model.getBuild().getPluginManagement());",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 7110,
		"linenumber" : 447,
		"changeype" : "UNCLASSIFIED_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "static",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 7113,
		"linenumber" : 215,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((filter != null) && (! filter.include(newArtifact.getArtifactId())))]((filter != null) && (! filter.include(newArtifact)))",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 7119,
		"linenumber" : 75,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Boolean result = (Boolean) run.invoke(batteryExecutor, new Object[]{reports, batteries, surefireClassLoader, \"dummy\"});]Boolean result = (Boolean) run.invoke(batteryExecutor, new Object[]{reports, batteries, surefireClassLoader, reportsDir});",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 7133,
		"linenumber" : 61,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! isPom())](! \"pom\".equals(project.getPackaging()))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 7135,
		"linenumber" : 78,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "MavenProject project = mavenProjectBuilder.getCachedProject(artifact.getGroupId(), artifact.getArtifactId(), artifact.getVersion());",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 7135,
		"linenumber" : 86,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "MavenProject project = mavenProjectBuilder.build(metadataArtifact.getFile(), localRepository);]MavenProject p = mavenProjectBuilder.build(metadataArtifact.getFile(), localRepository);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 7136,
		"linenumber" : 83,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "dependencies = project.getDependencies();",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 7136,
		"linenumber" : 87,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "artifacts = artifactFactory.createArtifacts(project.getDependencies(), localRepository, artifact.getScope());",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 7163,
		"linenumber" : 583,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "artifactFilter = new ExclusionSetFilter(new String[]{\"maven-core\", \"maven-artifact\", \"maven-model\", \"maven-user-model\", \"maven-monitor\", \"maven-plugin\", \"plexus-container-api\", \"plexus-container-default\", \"plexus-artifact-container\", \"wagon-provider-api\", \"classworlds\"});]artifactFilter = new ExclusionSetFilter(new String[]{\"maven-core\", \"maven-artifact\", \"maven-model\", \"maven-settings\", \"maven-monitor\", \"maven-plugin\", \"plexus-container-api\", \"plexus-container-default\", \"plexus-artifact-container\", \"wagon-provider-api\", \"classworlds\"});",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 7179,
		"linenumber" : 93,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "expression.startsWith(\"#userModel\")]\"#settings\".equals(expression)",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 7200,
		"linenumber" : 228,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "System.out.println(StringLiteralConcatenation{\"<userModel>\\n  \"+\n\"<mavenProfiles>\\n    \"+\n\"<mavenProfile>\\n      \"+\n\"<id>someId</id>\\n      \"+\n\"<localRepository>/path/to/your/repository</localRepository>\\n    \"+\n\"</mavenProfile>\\n  \"+\n\"</mavenProfiles>\\n  \"+\n\"<defaultProfiles>\\n    \"+\n\"<mavenProfileId>someId</mavenProfileId>\\n  \"+\n\"</defaultProfiles>\\n\"+\n\"</userModel>\\n\"+\n});]System.out.println(StringLiteralConcatenation{\"<settings>\\n  \"+\n\"<profiles>\\n    \"+\n\"<profile>\\n      \"+\n\"<localRepository>/path/to/your/repository</localRepository>\\n    \"+\n\"</profile>\\n  \"+\n\"</profiles>\\n\"+\n\"</settings>\\n\"+\n});",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 7262,
		"linenumber" : 357,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(MavenProject) projectCache.get(createCacheKey(groupId, artifactId, version));](Model) modelCache.get(createCacheKey(groupId, artifactId, version));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 7282,
		"linenumber" : 201,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "project.getArtifacts().addAll(result.getArtifacts().values());]project.addArtifacts(result.getArtifacts().values());",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 7284,
		"linenumber" : 62,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "i.hasNext()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 7284,
		"linenumber" : 62,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Iterator i = assembly.getFormats().iterator();",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 7284,
		"linenumber" : 71,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "i.hasNext()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 7284,
		"linenumber" : 71,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "i.hasNext()]j.hasNext()",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 7284,
		"linenumber" : 71,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Iterator i = assembly.getFilesets().iterator();]Iterator j = assembly.getFilesets().iterator();",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 7339,
		"linenumber" : 190,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new CompilerError(file, false, line, startcolumn, line, endcolumn, message);]new CompilerError(file, true, line, startcolumn, line, endcolumn, message);",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 7377,
		"linenumber" : 145,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((((((getGroupId() + \":\") + getArtifactId()) + \":\") + getType()) + \":\") + getVersion());]((getConflictId() + \":\") + getVersion());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 7400,
		"linenumber" : 177,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(((((getGroupId() + \":\") + getArtifactId()) + \":\") + getType()) + (hasClassifier() ? (\":\" + getClassifier()) : \"\"));]((((getGroupId() + \":\") + getArtifactId()) + \":\") + getType());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 7430,
		"linenumber" : 547,
		"changeype" : "REMOVED_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "org.apache.maven.plugin.DefaultPluginManager.createParameters(MojoDescriptor,MavenSession)",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 7430,
		"linenumber" : 560,
		"changeype" : "PARAMETER_INSERT",
		"changeentity" : "PARAMETER",
		"changecontent" : "configuration",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 7432,
		"linenumber" : 628,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "iterator.hasNext()](iterator.hasNext() && (dom == null))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 7445,
		"linenumber" : 179,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "warSourceDirectory.exists()]new File(warSourceDirectory).exists()",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 7446,
		"linenumber" : 198,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "getLog().info((((\"Assembling webapp \" + project.getArtifactId()) + \" in \") + webappDirectory.getAbsolutePath()));]getLog().info((((\"Assembling webapp \" + project.getArtifactId()) + \" in \") + webappDirectory));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 7495,
		"linenumber" : 282,
		"changeype" : "RETURN_TYPE_CHANGE",
		"changeentity" : "QUALIFIED_TYPE",
		"changecontent" : "org.apache.maven.tools.repoclean.translate.PomV3ToV4Translator.translateOrganization(org.apache.maven.model.v3_0_0.Organization,Reporter): org.apache.maven.model.v4_0_0.Organization]org.apache.maven.tools.repoclean.translate.PomV3ToV4Translator.translateOrganization(org.apache.maven.model.v3_0_0.Organization,Reporter): org.apache.maven.model.Organization",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 7522,
		"linenumber" : 53,
		"changeype" : "REMOVED_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "org.apache.maven.artifact.AbstractArtifactComponent.localPath(Artifact,ArtifactRepository)",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 7523,
		"linenumber" : 55,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "artifact.setPath(getLocalRepositoryArtifactPath(localRepository, artifact));]artifact.setPath(getLocalRepositoryArtifactPath(artifact, localRepository));",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 7575,
		"linenumber" : 48,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 7575,
		"linenumber" : 48,
		"changeype" : "PARAMETER_INSERT",
		"changeentity" : "PARAMETER",
		"changecontent" : "wagonManager",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 7575,
		"linenumber" : 50,
		"changeype" : "PARAMETER_DELETE",
		"changeentity" : "PARAMETER",
		"changecontent" : "localRepository",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 7591,
		"linenumber" : 672,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(iterator.hasNext() && (dom == null))]iterator.hasNext()",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 7603,
		"linenumber" : 75,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "ArtifactMetadata metadata = new ModelMetadata(artifact, pom);]ArtifactMetadata metadata = new MavenMetadata(artifact, pom);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 7611,
		"linenumber" : 80,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String path = new File(localRepository.getBasedir(), localRepository.pathOfMetadata(this)).getPath();]String path = getLocalRepositoryLocation(localRepository).getPath();",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 7618,
		"linenumber" : 108,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "result = StringUtils.replace(result, wholeExpr, value);]result = StringUtils.replace(result, wholeExpr, String.valueOf(value));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 7630,
		"linenumber" : 166,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "artifact.setRepository(oldRepository);]newArtifact.setRepository(artifact.getRepository());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 7637,
		"linenumber" : 57,
		"changeype" : "PARAMETER_DELETE",
		"changeentity" : "PARAMETER",
		"changecontent" : "filename",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 7663,
		"linenumber" : 35,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.settings = new Settings();]settings = new Settings();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 7688,
		"linenumber" : 142,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "commandLine.hasOption(CLIManager.UPDATE_SNAPSHOTS)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 7690,
		"linenumber" : 318,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "options.addOption(OptionBuilder.withLongOpt(\"offline\").hasArg().withDescription(\"Work offline\").create(WORK_OFFLINE));]options.addOption(OptionBuilder.withLongOpt(\"offline\").withDescription(\"Work offline\").create(OFFLINE));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 7739,
		"linenumber" : 133,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String validVersionParts = StringLiteralConcatenation{\"([Dd][Ee][Vv][_.0-9]*)|\"+\n\"([Ss][Nn][Aa][Pp][Ss][Hh][Oo][Tt])|\"+\n\"([_.0-9ab]+)|\"+\n\"([Gg]?[_.0-9ab]*([Pp][Rr][Ee]|[Rr][Cc]|[Gg]|[Mm])[_.0-9]*)|\"+\n\"([Aa][Ll][Pp][Hh][Aa][_.0-9]*)|\"+\n\"([Bb][Ee][Tt][Aa][_.0-9]*)|\"+\n\"([Rr][Cc][_.0-9]*)|\"+\n\"([Tt][Ee][Ss][Tt][_.0-9]*)|\"+\n\"([Dd][Ee][Bb][Uu][Gg][_.0-9]*)|\"+\n\"([Uu][Nn][Oo][Ff][Ff][Ii][Cc][Ii][Aa][Ll][_.0-9]*)|\"+\n\"([Rr][Ee][Ll][Ee][Aa][Ss][Ee][_.0-9]*)|\"+\n\"([Nn][Ii][Gg][Hh][Tt][Ll][Yy])\"+\n};]String validVersionParts = StringLiteralConcatenation{\"([Dd][Ee][Vv][_.0-9]*)|\"+\n\"([Ss][Nn][Aa][Pp][Ss][Hh][Oo][Tt])|\"+\n\"([0-9][_.0-9a-zA-Z]*)|\"+\n\"([Gg]?[_.0-9ab]*([Pp][Rr][Ee]|[Rr][Cc]|[Gg]|[Mm])[_.0-9]*)|\"+\n\"([Aa][Ll][Pp][Hh][Aa][_.0-9]*)|\"+\n\"([Bb][Ee][Tt][Aa][_.0-9]*)|\"+\n\"([Rr][Cc][_.0-9]*)|\"+\n\"([Tt][Ee][Ss][Tt][_.0-9]*)|\"+\n\"([Dd][Ee][Bb][Uu][Gg][_.0-9]*)|\"+\n\"([Uu][Nn][Oo][Ff][Ff][Ii][Cc][Ii][Aa][Ll][_.0-9]*)|\"+\n\"([Cc][Uu][Rr][Rr][Ee][Nn][Tt])|\"+\n\"([Ll][Aa][Tt][Ee][Ss][Tt])|\"+\n\"([Ff][Cc][Ss])|\"+\n\"([Rr][Ee][Ll][Ee][Aa][Ss][Ee][_.0-9]*)|\"+\n\"([Nn][Ii][Gg][Hh][Tt][Ll][Yy])\"+\n};",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 7760,
		"linenumber" : 323,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "reader.artifactId.equals(\"maven-core\")]reader.getArtifactId().equals(\"maven-core\")",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 7780,
		"linenumber" : 944,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "classpath[i] = ((repoLocal + \"/\") + getArtifactPath(d, \"/\"));]classpath[i] = ((repoLocal + \"/\") + d.getRepositoryPath());",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 7787,
		"linenumber" : 91,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! downloadedArtifacts.contains(dep))](! downloadedArtifacts.contains(dep.getId()))",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 7796,
		"linenumber" : 815,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String[] classpath = new String[(dependencies.size() + 1)];]List classpath = new ArrayList((dependencies.size() + 1));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 7800,
		"linenumber" : 13,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "this(ClassLoader.getSystemClassLoader());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 7800,
		"linenumber" : 13,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(new URL[0], null);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 7818,
		"linenumber" : 301,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "artifactReporter.error(((\"Error while rewriting file or POM for artifact: \\\'\" + artifact.getId()) + \"\\\'\"), e);]artifactReporter.error(((((\"Error while rewriting file or POM for artifact: \\\'\" + artifact.getId()) + \"\\\'. See report at: \\\'\") + artifactReportPath) + \"\\\'.\"), e);",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 7885,
		"linenumber" : 243,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Repository localRepository = new Repository(mavenRepoLocal, Repository.LAYOUT_LEGACY);]Repository localRepository = new Repository(mavenRepoLocal, Repository.LAYOUT_DEFAULT);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 7889,
		"linenumber" : 52,
		"changeype" : "ATTRIBUTE_TYPE_CHANGE",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "List",
		"parententity" : "FIELD"
	},
	{
		"linetupleid" : 7904,
		"linenumber" : 823,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Dependency d = (Dependency) dependencies.get(i);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 7904,
		"linenumber" : 823,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Dependency d = (Dependency) dependencies.get(i);]Dependency d = (Dependency) i.next();",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 7913,
		"linenumber" : 65,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Iterator i = getJarResources(resources).iterator();]Iterator i = getJarResources(resources).entrySet().iterator();",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 7966,
		"linenumber" : 59,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "private",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 7982,
		"linenumber" : 125,
		"changeype" : "PARAMETER_DELETE",
		"changeentity" : "PARAMETER",
		"changecontent" : "projectDescriptor",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 7982,
		"linenumber" : 145,
		"changeype" : "PARAMETER_INSERT",
		"changeentity" : "PARAMETER",
		"changecontent" : "remoteArtifactRepositories",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 8036,
		"linenumber" : 166,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < prereqConfigurations.length)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 8036,
		"linenumber" : 167,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < requirements.length)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 8037,
		"linenumber" : 168,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "PlexusConfiguration d = prereqConfigurations[i];",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 8037,
		"linenumber" : 168,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "PlexusConfiguration d = prereqConfigurations[i];]PlexusConfiguration requirement = requirements[i];",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 8067,
		"linenumber" : 260,
		"changeype" : "PARAMETER_TYPE_CHANGE",
		"changeentity" : "QUALIFIED_TYPE",
		"changecontent" : "fileSets: java.util.List",
		"parententity" : "PARAMETER"
	},
	{
		"linetupleid" : 8067,
		"linenumber" : 260,
		"changeype" : "PARAMETER_ORDERING_CHANGE",
		"changeentity" : "PARAMETER",
		"changecontent" : "archiver",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 8067,
		"linenumber" : 333,
		"changeype" : "PARAMETER_INSERT",
		"changeentity" : "PARAMETER",
		"changecontent" : "includeBaseDirecetory",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 8089,
		"linenumber" : 56,
		"changeype" : "PARAMETER_TYPE_CHANGE",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "settings: MavenSettings]settings: Settings",
		"parententity" : "PARAMETER"
	},
	{
		"linetupleid" : 8215,
		"linenumber" : 115,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "value = context.getProject().getFile().getParentFile().getAbsolutePath();]value = context.getProject().getBasedir().getAbsolutePath();",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 8243,
		"linenumber" : 32,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(((((((\"Plugin could not found in any remote repositories: [\" + groupId) + \":\") + artifactId) + \":\") + version) + \"]\"), e);]super(\"Plugin could not be found - check that the goal name is correct\", groupId, artifactId, version, \"maven-plugin\", e);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 8249,
		"linenumber" : 557,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "URL url = DefaultMavenProjectBuilder.class.getResource(((\"pom-\" + MavenConstants.MAVEN_MODEL_VERSION) + \".xml\"));]URL url = DefaultMavenProjectBuilder.class.getResource(((\"pom-\" + MAVEN_MODEL_VERSION) + \".xml\"));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 8420,
		"linenumber" : 321,
		"changeype" : "PARAMETER_INSERT",
		"changeentity" : "PARAMETER",
		"changecontent" : "mojoDescriptor",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 8420,
		"linenumber" : 321,
		"changeype" : "PARAMETER_DELETE",
		"changeentity" : "PARAMETER",
		"changecontent" : "goalName",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 8425,
		"linenumber" : 271,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(parameterInfo instanceof JavaField)](val instanceof JavaField)",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 8426,
		"linenumber" : 273,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "field = (JavaField) parameterInfo;]field = (JavaField) val;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 8512,
		"linenumber" : 239,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(exception instanceof PluginExecutionException)](exception instanceof MojoExecutionException)",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 8528,
		"linenumber" : 267,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Logger logger = manager.getLoggerForComponent(Plugin.ROLE);]Logger logger = manager.getLoggerForComponent(Mojo.ROLE);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 8557,
		"linenumber" : 363,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "plugin = (Plugin) container.lookup(Plugin.ROLE, goalName);]plugin = (Mojo) container.lookup(Mojo.ROLE, goalName);",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 8565,
		"linenumber" : 595,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new PluginExecutionRequest(map);]new MojoExecutionRequest(map);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 8567,
		"linenumber" : 61,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "Mojo.ROLE;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 8567,
		"linenumber" : 61,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "Plugin.ROLE;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 8603,
		"linenumber" : 5,
		"changeype" : "ATTRIBUTE_RENAMING",
		"changeentity" : "FIELD",
		"changecontent" : "org.apache.maven.it0011.PersonFinder.plugin : org.apache.maven.plugin.Plugin",
		"parententity" : "FIELD"
	},
	{
		"linetupleid" : 8603,
		"linenumber" : 5,
		"changeype" : "ATTRIBUTE_TYPE_CHANGE",
		"changeentity" : "QUALIFIED_TYPE",
		"changecontent" : "org.apache.maven.plugin.Plugin]org.apache.maven.plugin.Mojo",
		"parententity" : "FIELD"
	},
	{
		"linetupleid" : 8618,
		"linenumber" : 243,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Artifact pluginArtifact = artifactFactory.createArtifact(groupId, artifactId, version, null, MAVEN_PLUGIN, null);]Artifact pluginArtifact = artifactFactory.createArtifact(groupId, artifactId, version, null, MojoDescriptor.MAVEN_PLUGIN, null);",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 8773,
		"linenumber" : 407,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new ProjectBuildingException(((\"Error while reading model from file \\\'\" + file.getAbsolutePath()) + \"\\\'.\"), e);]new ProjectBuildingException(((((\"Failed to build model from file \\\'\" + file.getAbsolutePath()) + \"\\\'.\\nError: \\\'\") + e.getLocalizedMessage()) + \"\\\'\"), e);",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 8776,
		"linenumber" : 432,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new ProjectBuildingException((\"Error while building model from \" + url.toExternalForm()), e);]new ProjectBuildingException(((((\"Failed build model from URL \\\'\" + url.toExternalForm()) + \"\\\'\\nError: \\\'\") + e.getLocalizedMessage()) + \"\\\'\"), e);",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 8787,
		"linenumber" : 208,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(StringUtils.isNotEmpty(expression) && (expression.startsWith(\"${component.\") || expression.startsWith(\"#component.\")))",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 8880,
		"linenumber" : 279,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new ProjectBuildingException(i18n.format(\"empty.descriptor.error\", pom.getName()));]new ProjectBuildingException(i18n.format(\"empty.descriptor.error\", pom));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 8932,
		"linenumber" : 180,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "parameter.setEditable(((editable == null) || \"true\".equals(editable)));]parameter.setEditable(((editable == null) || Boolean.valueOf(editable).booleanValue()));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 8956,
		"linenumber" : 168,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "System.out.println((((((((((((((((((((((((((StringLiteralConcatenation{\"# ---------------------------------------------------------------------------\\n\"+\n\"# repoclean: Repository Cleaner/Converter.\\n\"+\n\"# This configuration auto-generated on: \"+\n} + new java.util.Date()) + \"\\n\") + \"# ---------------------------------------------------------------------------\\n\\n\") + \"# [REQUIRED OPTIONS]\\n\") + \"sourceRepositoryPath=/path/to/repository/root\\n\") + \"targetRepositoryPath=/path/to/repository/root\\n\") + \"reportsPath=/path/to/reports/directory\\n\") + \"reportOnly=[true|false]\\n\") + \"\\n\") + \"errorReport.mailOnError=[true|false]\\n\") + \"errorReport.fromAddress=admin@somewhere.com\\n\") + \"errorReport.fromName=Admin\\n\") + \"errorReport.subject=[REPOCLEAN] Error!\\n\") + \"errorReport.toAddress=dev@somewhere.com\\n\") + \"errorReport.toName=Developers List\\n\") + \"\\n\") + \"# [DEFAULT VALUE: legacy]\\n\") + \"#sourceRepositoryLayout=[legacy|default]\\n\\n\") + \"# [DEFAULT VALUE: v3]\\n\") + \"#sourcePomType=[v3|v4]\\n\\n\") + \"# [DEFAULT VALUE: default]\\n\") + \"#targetRepositoryLayout=[legacy|default]\\n\") + \"# [DEFAULT VALUE: localhost]\\n\") + \"#errorReport.smtpHost=<hostname>\\n\") + \"\\n\"));]System.out.println(((((((((((((((((((((((((StringLiteralConcatenation{\"# ---------------------------------------------------------------------------\\n\"+\n\"# repoclean: Repository Cleaner/Converter.\\n\"+\n\"# This configuration auto-generated on: \"+\n} + new java.util.Date()) + \"\\n\") + \"# ---------------------------------------------------------------------------\\n\\n\") + \"# [REQUIRED OPTIONS]\\n\") + \"sourceRepositoryPath=/path/to/repository/root\\n\") + \"targetRepositoryPath=/path/to/repository/root\\n\") + \"reportsPath=/path/to/reports/directory\\n\") + \"reportOnly=[true|false]\\n\") + \"\\n\") + \"errorReport.mailOnError=[true|false]\\n\") + \"errorReport.fromAddress=admin@somewhere.com\\n\") + \"errorReport.fromName=Admin\\n\") + \"errorReport.subject=[REPOCLEAN] Error!\\n\") + \"errorReport.toAddress=dev@somewhere.com\\n\") + \"errorReport.toName=Developers List\\n\") + \"\\n\") + \"# [DEFAULT VALUE: legacy]\\n\") + \"#sourceRepositoryLayout=[legacy|default]\\n\\n\") + \"# [DEFAULT VALUE: v3]\\n\") + \"# [DEFAULT VALUE: default]\\n\") + \"#targetRepositoryLayout=[legacy|default]\\n\") + \"# [DEFAULT VALUE: localhost]\\n\") + \"#errorReport.smtpHost=<hostname>\\n\") + \"\\n\"));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 9044,
		"linenumber" : 38,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super((((((((((\"Unable to resolve artifact \" + groupId) + \":\") + artifactId) + \":\") + version) + \":\") + type) + \"\\n\") + message), t);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 9044,
		"linenumber" : 45,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(constructMessage(message, groupId, artifactId, version, type, remoteRepositories), t);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 9076,
		"linenumber" : 45,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "private",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 9139,
		"linenumber" : 101,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "File resultFile = new File(getConfiguration().getOutputDirectory(), resultFileName);]File resultFile = new File((getConfiguration().getModel().getBuild().getDirectory() + \"/site\"), resultFileName);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 9197,
		"linenumber" : 73,
		"changeype" : "ATTRIBUTE_TYPE_CHANGE",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "String",
		"parententity" : "FIELD"
	},
	{
		"linetupleid" : 9257,
		"linenumber" : 101,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "XhtmlSink sink = getSiteRenderer().createSink(new File(outputDirectory), outputDirectory, (getOutputName() + \".html\"), getSiteDescriptor(), \"maven\");]XhtmlSink sink = getSiteRenderer().createSink(new File(outputDirectory), (getOutputName() + \".html\"), outputDirectory, getSiteDescriptor(), \"maven\");",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 9259,
		"linenumber" : 293,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(settings.getActiveProfile().isOffline() && mojoDescriptor.isOnlineRequired())](settings.isOffline() && mojoDescriptor.isOnlineRequired())",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 9272,
		"linenumber" : 75,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new NullPointerException(\"Artifact groupId cannot be null.\");",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 9301,
		"linenumber" : 793,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "artifactFilter = new ExclusionSetFilter(new String[]{\"maven-core\", \"maven-artifact\", \"maven-model\", \"maven-settings\", \"maven-monitor\", \"maven-plugin-api\", \"maven-plugin-descriptor\", \"plexus-container-default\", \"maven-project\", \"plexus-container-artifact\", \"maven-reporting-api\", \"doxia-core\", \"wagon-provider-api\", \"classworlds\", \"maven-plugin\", \"plexus-marmalade-factory\", \"maven-script-marmalade\", \"maven-script-beanshell\", \"plexus-bsh-factory\", \"bsh\"\n  , \"marmalade-core\", \"plexus-utils\"});]artifactFilter = new ExclusionSetFilter(new String[]{\"bsh\", \"classworlds\", \"doxia-core\", \"marmalade-core\", \"maven-artifact\", \"maven-core\", \"maven-model\", \"maven-monitor\", \"maven-plugin\", \"maven-plugin-api\", \"maven-plugin-descriptor\", \"maven-project\", \"maven-reporting-api\", \"maven-script-beanshell\", \"maven-script-marmalade\", \"maven-settings\", \"plexus-bsh-factory\", \"plexus-container-artifact\", \"plexus-container-default\", \"plexus-i18n\"\n  , \"plexus-marmalade-factory\", \"plexus-utils\", \"wagon-provider-api\"});",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 9393,
		"linenumber" : 300,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Iterator i = configuration.keySet().iterator();]Iterator i = configuration.iterator();",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 9443,
		"linenumber" : 105,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "private",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 9518,
		"linenumber" : 563,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "it.hasNext()]propertyIterator.hasNext()",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 9548,
		"linenumber" : 255,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Iterator j = pluginDescriptor.getMojos().iterator();",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 9548,
		"linenumber" : 255,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "j.hasNext()",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 9548,
		"linenumber" : 255,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "j.hasNext()]it.hasNext()",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 9548,
		"linenumber" : 329,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Iterator it = executions.iterator();",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 9596,
		"linenumber" : 313,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "pluginDescriptor = pluginManager.verifyPlugin(groupId, artifactId, version, session.getProject(), session.getLocalRepository(), session.getSettings().isInteractiveMode());]pluginDescriptor = pluginManager.verifyPlugin(groupId, artifactId, version, session.getProject(), session.getSettings(), session.getLocalRepository());",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 9624,
		"linenumber" : 52,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "path.append(artifactHandler.directory()).append(\'/\');]path.append(artifactHandler.getDirectory()).append(\'/\');",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 9651,
		"linenumber" : 62,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "protected",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 9693,
		"linenumber" : 404,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Iterator it = project.getReports().getPlugins().iterator();]Iterator it = project.getReporters().iterator();",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 9699,
		"linenumber" : 142,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "cmd = ((((((\" cd \" + basedir) + \";\") + unzipCommand) + \" \") + zipFile.getName()) + \"\\n\");]cmd = (((((((((\" cd \" + basedir) + \";\") + unzipCommand) + \" \") + zipFile.getName()) + \"; rm  \") + basedir) + \"/\") + zipFile.getName());",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 9947,
		"linenumber" : 539,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new MavenMetadataSource(artifactResolver, this, artifactFactory).createArtifacts(dependencies, null, null);]MavenMetadataSource.createArtifacts(artifactFactory, dependencies, null, null);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 9958,
		"linenumber" : 50,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "collect(artifacts, originatingArtifact, Collections.EMPTY_SET, localRepository, remoteRepositories, source, filter, artifactFactory);]collect(artifacts, originatingArtifact, Collections.EMPTY_MAP, localRepository, remoteRepositories, source, filter, artifactFactory);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 9986,
		"linenumber" : 216,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.parents = Collections.EMPTY_SET;]this.parents = Collections.EMPTY_LIST;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 10027,
		"linenumber" : 190,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "tableHeader(new String[]{\"Name\", \"Subscribe\", \"Unsubscribe\", \"Post\", \"Archive\", \"Other Archives\"});]tableHeader(new String[]{name, subscribe, unsubscribe, post, archive, archivesOther});",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 10068,
		"linenumber" : 438,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "System.out.println((\"Maven version: \" + version));]System.out.println((\"Maven version: \" + properties.getProperty(\"version\", \"unknown\")));",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 10078,
		"linenumber" : 36,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "path.append(artifact.getGroupId().replace(\'.\', \'/\')).append(\'/\');]path.append(formatDirectory(artifact.getGroupId())).append(\'/\');",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 10114,
		"linenumber" : 144,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new PluginManagerException((((\"Error occurred in the artifact container attempting to download plugin \" + groupId) + \":\") + artifactId), e);]new PluginManagerException((\"Error occurred in the artifact container attempting to download plugin \" + plugin.getKey()), e);",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 10302,
		"linenumber" : 83,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.version = ((versionRange != null) ? versionRange.getRecommendedVersion() : null);]this.version = ((versionRange != null) ? versionRange.getRecommendedVersion().toString() : null);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 10303,
		"linenumber" : 99,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Artifact artifact = artifactFactory.createDependencyArtifact(d.getGroupId(), d.getArtifactId(), new VersionRange(d.getVersion()), d.getType(), d.getScope(), inheritedScope);]Artifact artifact = artifactFactory.createDependencyArtifact(d.getGroupId(), d.getArtifactId(), VersionRange.createFromVersionSpec(d.getVersion()), d.getType(), d.getScope(), inheritedScope);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 10310,
		"linenumber" : 145,
		"changeype" : "REMOVING_METHOD_OVERRIDABILITY",
		"changeentity" : "MODIFIER",
		"changecontent" : "final",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 10345,
		"linenumber" : 11,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super((((\"Failed to resolve repository metadata: \" + metadata) + \". Error was: \") + cause.getMessage()), cause);]super((((((\"Failed to resolve repository metadata: \" + metadata) + \".\\n\\nOriginal message: \") + message) + \"\\n\\nError was: \") + cause.getMessage()), cause);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 10357,
		"linenumber" : 367,
		"changeype" : "ADDITIONAL_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "org.apache.maven.reporting.AbstractMavenReportRenderer.createLinkPatternedText(String,String)",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 10359,
		"linenumber" : 423,
		"changeype" : "ADDITIONAL_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "org.apache.maven.reporting.AbstractMavenReportRenderer.getValidHref(String)",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 10362,
		"linenumber" : 106,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "projectBuilder.buildWithDependencies(pom, getLocalRepository(), new ProjectClasspathArtifactResolver.Source(artifactFactory, artifactRepositoryFactory, getContainer()), Collections.EMPTY_LIST);]projectBuilder.buildWithDependencies(pom, getLocalRepository(), new TestArtifactResolver.Source(artifactFactory, artifactRepositoryFactory, getContainer()), Collections.EMPTY_LIST);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 10400,
		"linenumber" : 192,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "surefireBooter.addBattery(\"org.codehaus.surefire.battery.DirectoryBattery\", new Object[]{basedir, includes, excludes});]surefireBooter.addBattery(\"org.codehaus.surefire.battery.DirectoryBattery\", new Object[]{testClassesDirectory, includes, excludes});",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 10406,
		"linenumber" : 16,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "surefireBooter.addBattery(\"org.codehaus.surefire.battery.DirectoryBattery\", new Object[]{basedir, includes, excludes});]surefireBooter.addBattery(\"org.codehaus.surefire.battery.DirectoryBattery\", new Object[]{new File(basedir, \"target/test-classes\"), includes, excludes});",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 10534,
		"linenumber" : 418,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "artifactRepositoryFactory.setGlobalChecksumPolicy(ArtifactRepository.CHECKSUM_POLICY_FAIL);]artifactRepositoryFactory.setGlobalChecksumPolicy(ArtifactRepositoryPolicy.CHECKSUM_POLICY_FAIL);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 10563,
		"linenumber" : 16,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(artifact, ((((artifact.getArtifactId() + \"-\") + LatestArtifactTransformation.LATEST_VERSION) + \".\") + SNAPSHOT_VERSION_FILE));]super(artifact, ((((artifact.getArtifactId() + \"-\") + Artifact.LATEST_VERSION) + \".\") + SNAPSHOT_VERSION_FILE));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 10621,
		"linenumber" : 548,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "options.addOption(OptionBuilder.withLongOpt(FORCE_PLUGIN_UPDATES).withDescription(\"Force upToDate check for any relevant registered plugins\").create(\"cpu\"));]options.addOption(OptionBuilder.withLongOpt(\"check-plugin-updates\").withDescription(\"Force upToDate check for any relevant registered plugins\").create(FORCE_PLUGIN_UPDATES));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 10622,
		"linenumber" : 550,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "options.addOption(OptionBuilder.withLongOpt(FORCE_PLUGIN_UPDATES2).withDescription((\"Synonym for \" + FORCE_PLUGIN_UPDATES)).create(\"up\"));]options.addOption(OptionBuilder.withLongOpt(\"update-plugins\").withDescription((\"Synonym for \" + FORCE_PLUGIN_UPDATES)).create(FORCE_PLUGIN_UPDATES2));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 10623,
		"linenumber" : 552,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "options.addOption(OptionBuilder.withLongOpt(SUPPRESS_PLUGIN_UPDATES).withDescription(\"Suppress upToDate check for any relevant registered plugins\").create(\"npu\"));]options.addOption(OptionBuilder.withLongOpt(\"no-plugin-updates\").withDescription(\"Suppress upToDate check for any relevant registered plugins\").create(SUPPRESS_PLUGIN_UPDATES));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 10624,
		"linenumber" : 554,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "options.addOption(OptionBuilder.withLongOpt(FORCE_PLUGIN_LATEST_CHECK).withDescription(\"Force checking of LATEST metadata for plugin versions\").create(\"cpl\"));]options.addOption(OptionBuilder.withLongOpt(\"check-plugin-latest\").withDescription(\"Force checking of LATEST metadata for plugin versions\").create(FORCE_PLUGIN_LATEST_CHECK));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 10625,
		"linenumber" : 556,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "options.addOption(OptionBuilder.withLongOpt(SUPPRESS_PLUGIN_LATEST_CHECK).withDescription(\"Suppress checking of LATEST metadata for plugin versions\").create(\"npl\"));]options.addOption(OptionBuilder.withLongOpt(\"no-plugin-latest\").withDescription(\"Suppress checking of LATEST metadata for plugin versions\").create(SUPPRESS_PLUGIN_LATEST_CHECK));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 10643,
		"linenumber" : 278,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "ArtifactHandler artifactHandler = artifactHandlerManager.getArtifactHandler(artifact.getType());]ArtifactHandler artifactHandler = artifact.getArtifactHandler();",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 10738,
		"linenumber" : 157,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "project.setDependencyArtifacts(MavenProject.createArtifacts(artifactFactory, project.getDependencies()));]project.setDependencyArtifacts(project.createArtifacts(artifactFactory));",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 10846,
		"linenumber" : 168,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "System.out.println(((((((((((((((((((((((((((StringLiteralConcatenation{\"# ---------------------------------------------------------------------------\\n\"+\n\"# repoclean: Repository Cleaner/Converter.\\n\"+\n\"# This configuration auto-generated on: \"+\n} + new java.util.Date()) + \"\\n\") + \"# ---------------------------------------------------------------------------\\n\\n\") + \"# [REQUIRED OPTIONS]\\n\") + \"sourceRepositoryPath=/path/to/repository/root\\n\") + \"targetRepositoryPath=/path/to/repository/root\\n\") + \"reportsPath=/path/to/reports/directory\\n\") + \"reportOnly=[true|false]\\n\") + \"\\n\") + \"errorReport.mailOnError=[true|false]\\n\") + \"errorReport.fromAddress=admin@somewhere.com\\n\") + \"errorReport.fromName=Admin\\n\") + \"errorReport.subject=[REPOCLEAN] Error!\\n\") + \"errorReport.toAddress=dev@somewhere.com\\n\") + \"errorReport.toName=Developers List\\n\") + \"\\n\") + \"# [DEFAULT VALUE: legacy]\\n\") + \"#sourceRepositoryLayout=[legacy|default]\\n\\n\") + \"# [DEFAULT VALUE: v3]\\n\") + \"# [DEFAULT VALUE: default]\\n\") + \"#targetRepositoryLayout=[legacy|default]\\n\") + \"# [DEFAULT VALUE: localhost]\\n\") + \"#errorReport.smtpHost=<hostname>\\n\") + \"# [DEFAULT VALUE: false]\\n\") + \"#reportWarnings=[true|false]\\n\") + \"\\n\"));]System.out.println(((((((((((((((((((((((((((StringLiteralConcatenation{\"# ---------------------------------------------------------------------------\\n\"+\n\"# repoclean: Repository Cleaner/Converter.\\n\"+\n\"# This configuration auto-generated on: \"+\n} + new Date()) + \"\\n\") + \"# ---------------------------------------------------------------------------\\n\\n\") + \"# [REQUIRED OPTIONS]\\n\") + \"sourceRepositoryPath=/path/to/repository/root\\n\") + \"targetRepositoryPath=/path/to/repository/root\\n\") + \"reportsPath=/path/to/reports/directory\\n\") + \"reportOnly=[true|false]\\n\") + \"\\n\") + \"errorReport.mailOnError=[true|false]\\n\") + \"errorReport.fromAddress=admin@somewhere.com\\n\") + \"errorReport.fromName=Admin\\n\") + \"errorReport.subject=[REPOCLEAN] Error!\\n\") + \"errorReport.toAddress=dev@somewhere.com\\n\") + \"errorReport.toName=Developers List\\n\") + \"\\n\") + \"# [DEFAULT VALUE: legacy]\\n\") + \"#sourceRepositoryLayout=[legacy|default]\\n\\n\") + \"# [DEFAULT VALUE: v3]\\n\") + \"# [DEFAULT VALUE: default]\\n\") + \"#targetRepositoryLayout=[legacy|default]\\n\") + \"# [DEFAULT VALUE: localhost]\\n\") + \"#errorReport.smtpHost=<hostname>\\n\") + \"# [DEFAULT VALUE: false]\\n\") + \"#reportWarnings=[true|false]\\n\") + \"\\n\"));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 11002,
		"linenumber" : 259,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new MojoExecutionException(((\"Error scanning source root: \\\'\" + sourceRoot) + \"\\\' for stale files to recompile.\"), e);]new MojoExecutionException((((\"Error scanning source root: \\\'\" + sourceRoot) + \"\\\' \") + \"for stale files to recompile.\"), e);",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 11171,
		"linenumber" : 236,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new IllegalArgumentException(((\"Can\\\'t find a valid Maven project in the repository for the artifact [\" + artifact) + \"].\"));]new IllegalArgumentException(((((((\"Can\\\'t find a valid Maven project in the repository for the artifact [\" + artifact.getGroupId()) + \":\") + artifact.getArtifactId()) + \":\") + artifact.getVersion()) + \"].\"));",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 11258,
		"linenumber" : 842,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "final int exitCode = CommandLineUtils.executeCommandLine(cmd, new DefaultConsumer(), new DefaultConsumer());]int exitCode = CommandLineUtils.executeCommandLine(cmd, new DefaultConsumer(), new DefaultConsumer());",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 11294,
		"linenumber" : 331,
		"changeype" : "REMOVED_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "org.apache.maven.project.ModelUtils.mergeDistributionManagementSections(ModelBase,ModelBase)",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 11322,
		"linenumber" : 1065,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(getArtifact().isSnapshot() ? snapshotArtifactRepository : releaseArtifactRepository);]((getArtifact().isSnapshot() && (snapshotArtifactRepository != null)) ? snapshotArtifactRepository : releaseArtifactRepository);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 11443,
		"linenumber" : 73,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "DefaultArtifact.SCOPE_COMPILE.equals(artifact.getScope())",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 11443,
		"linenumber" : 73,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "DefaultArtifact.SCOPE_COMPILE.equals(artifact.getScope())]Artifact.SCOPE_RUNTIME.equals(artifact.getScope())",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 11443,
		"linenumber" : 79,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "Artifact.SCOPE_COMPILE.equals(artifact.getScope())",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 11564,
		"linenumber" : 422,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(child.getName().equals(\"orderEntry\") && child.getAttribute(\"type\").equals(\"module-library\"))](\"orderEntry\".equals(child.getName()) && \"module-library\".equals(child.getAttribute(\"type\")))",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 11625,
		"linenumber" : 105,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "versioning.setRelease(artifact.getVersion());]artifact.setRelease(true);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 11675,
		"linenumber" : 99,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "scmConnection = scmConnection.substring(0, (scmConnection.length() - \"branches/\".length()));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 11755,
		"linenumber" : 180,
		"changeype" : "STATEMENT_ORDERING_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! dep.getType().equals(\"pom\"))",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 11755,
		"linenumber" : 180,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! dep.getType().equals(\"pom\"))](! \"pom\".equals(dep.getType()))",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 11802,
		"linenumber" : 171,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "((line = reader.readLine()) != null)](line != null)",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 11824,
		"linenumber" : 225,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((metadataList == null) ? Collections.EMPTY_LIST : metadataList);]((metadataMap == null) ? Collections.EMPTY_LIST : metadataMap.values());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 11955,
		"linenumber" : 975,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "artifactMap = null;]this.artifactMap = null;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 11963,
		"linenumber" : 33,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((version != null) && Artifact.VERSION_FILE_PATTERN.matcher(version).matches());]((version != null) && (version.toUpperCase().endsWith(\"SNAPSHOT\") || Artifact.VERSION_FILE_PATTERN.matcher(version).matches()));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 12258,
		"linenumber" : 55,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "message.append(\"\\n\\nRoot Cause: \").append(root.getMessage()).append(\"\\n\");]message.append(\"\\nRoot Cause: \").append(root.getMessage());",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 12261,
		"linenumber" : 60,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "PluginParameterException exception = (PluginParameterException) error;]PluginParameterException exception = (PluginParameterException) pce;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 12322,
		"linenumber" : 517,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new MojoExecutionException((\"Cannot prepare the release because you have local modifications : \\n\" + message.toString()));]new MojoExecutionException((\"Cannot prepare the release because you have local modifications : \\n\" + message));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 12361,
		"linenumber" : 218,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(((getDependencyConflictId() + (hasClassifier() ? (\":\" + getClassifier()) : \"\")) + \":\") + getBaseVersion());]((getDependencyConflictId() + \":\") + getBaseVersion());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 12573,
		"linenumber" : 32,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(\"Mojo could not be found - check that the goal name is correct\", e.getGroupId(), e.getArtifactId(), e.getVersion(), \"maven-plugin\", e.getRemoteRepositories(), e.getDownloadUrl(), e);]super(\"Plugin could not be found - check that the goal name is correct\", e.getGroupId(), e.getArtifactId(), e.getVersion(), \"maven-plugin\", e.getRemoteRepositories(), e.getDownloadUrl(), e.getCause());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 12574,
		"linenumber" : 30,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "DiagnosisUtils.containsInCausality(error, ArtifactResolutionException.class);]DiagnosisUtils.containsInCausality(error, AbstractArtifactResolutionException.class);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 12579,
		"linenumber" : 367,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "(ArtifactResolutionException) e;](ArtifactNotFoundException) e;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 12734,
		"linenumber" : 325,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "build(((\"Artifact [\" + artifact.getId()) + \"]\"), model, localRepository, remoteArtifactRepositories, null, null);]build(((\"Artifact [\" + artifact) + \"]\"), model, localRepository, remoteArtifactRepositories, null, null);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 12771,
		"linenumber" : 388,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(File[]) files.toArray(new File[0]);](File[]) files.toArray(EMPTY_FILE_ARRAY);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 12784,
		"linenumber" : 379,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "excludesStr.append(DEFAULT_EXCLUDES[i]);]excludesStr.append(defaultExcludes[i]);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 12955,
		"linenumber" : 139,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "buildFailuresByProject.containsKey(project.getId());]buildFailuresByProject.containsKey(getProjectKey(project));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 13123,
		"linenumber" : 525,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "buffer.append(\"\\n[\").append((idx ++)).append(\"] \");]buffer.append(\"\\n[\").append(idx).append(\"] \");",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 13127,
		"linenumber" : 79,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "buildParameterDiagnosticMessage(exception);]exception.buildDiagnosticMessage();",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 13132,
		"linenumber" : 156,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "response.setException(new ReactorException(\"One or more projects failed to build.\"));]response.setException(new BuildFailureException(\"One or more projects failed to build.\"));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 13227,
		"linenumber" : 47,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "protected",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 13440,
		"linenumber" : 28,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super((((((\"Error resolving version for \\\'\" + groupId) + \":\") + artifactId) + \"\\\': \") + baseMessage));]super(((((\"The plugin \\\'\" + groupId) + \":\") + artifactId) + \"\\\' does not exist or no valid version could be found\"));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 13478,
		"linenumber" : 351,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "isAddedToClasspath(a)]a.getArtifactHandler().isAddedToClasspath()",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 13524,
		"linenumber" : 108,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(- 1);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 13524,
		"linenumber" : 109,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(- i2.intValue());",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 13593,
		"linenumber" : 109,
		"changeype" : "ADDITIONAL_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "org.apache.maven.plugin.jar.AbstractJarMojo.getJarFile(File,String,String)",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 13597,
		"linenumber" : 22,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSERT_STATEMENT",
		"changecontent" : "(true == true)](true == true):\"true was not true\"",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 13661,
		"linenumber" : 428,
		"changeype" : "ADDING_METHOD_OVERRIDABILITY",
		"changeentity" : "MODIFIER",
		"changecontent" : "final",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 13735,
		"linenumber" : 441,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "File jarFile = new File(buildDir, (((artifactId + \"-\") + version) + \".jar\"));]File jarFile = new File(buildDir, (artifactId + \".jar\"));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 13925,
		"linenumber" : 47,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(constructMessage(message, groupId, artifactId, version, type, downloadUrl, path), groupId, artifactId, version, type, remoteRepositories, null, t);]super(constructMissingArtifactMessage(message, \"\", groupId, artifactId, version, type, downloadUrl, path), groupId, artifactId, version, type, remoteRepositories, null, t);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 14069,
		"linenumber" : 54,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 14127,
		"linenumber" : 132,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "repositories.addAll((Dependency) i.next().getRepositories());]repositories.addAll((Model) i.next().getRepositories());",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 14261,
		"linenumber" : 51,
		"changeype" : "UNCLASSIFIED_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "static",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 14497,
		"linenumber" : 500,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "verifyVersionedPlugin(forLookup, project, session.getLocalRepository());]verifyVersionedPlugin(forLookup, project, session);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 14513,
		"linenumber" : 329,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new IllegalStateException(((\"The PluginDescriptor for the plugin \" + plugin.getKey()) + \" was not found\"));]new IllegalStateException(((\"The PluginDescriptor for the plugin \" + projectPlugin.getKey()) + \" was not found\"));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 14649,
		"linenumber" : 161,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "this(new DefaultMavenEmbedRequest().setClassWorld(classWorld).setMavenEmbedderLogger(logger));]this(new DefaultMavenEmbedderConfiguration().setClassWorld(classWorld).setMavenEmbedderLogger(logger));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 14755,
		"linenumber" : 542,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new MavenSession(container, request, dispatcher, rpm);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 14755,
		"linenumber" : 542,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new MavenSession(container, request.getSettings(), request.getLocalRepository(), dispatcher, rpm, request.getGoals(), request.getBaseDirectory(), request.getProperties(), request.getStartTime());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 14858,
		"linenumber" : 39,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "runWithProject(goal, null);]runWithProject(Collections.singletonList(goal), null);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 14892,
		"linenumber" : 36,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super((\"Plugin could not be found - check that the goal name is correct: \" + e.getMessage()), e.getGroupId(), e.getArtifactId(), e.getVersion(), \"maven-plugin\", e.getRemoteRepositories(), null, e.getCause());]super((\"Plugin could not be found - check that the goal name is correct: \" + e.getMessage()), e.getGroupId(), e.getArtifactId(), e.getVersion(), \"maven-plugin\", null, e.getRemoteRepositories(), null, e.getCause());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 15078,
		"linenumber" : 82,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new File(resourceUrl.toURI());]new File(new URI(resourceUrl.getPath()));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 15122,
		"linenumber" : 142,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "(pomFile != null)](current != null)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 15202,
		"linenumber" : 40,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((getUserSettings() != null) && (getGlobalSettings() != null));]((getUserSettingsException() == null) && (getGlobalSettingsException() == null));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 15210,
		"linenumber" : 374,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "ArtifactResolutionResult result = artifactResolver.resolveTransitively(project.getDependencyArtifacts(), projectArtifact, managedVersions, localRepository, project.getRemoteArtifactRepositories(), artifactMetadataSource);]ArtifactResolutionRequest request = new ArtifactResolutionRequest().setArtifact(projectArtifact).setArtifactDependencies(project.getDependencyArtifacts()).setLocalRepository(localRepository).setRemoteRepostories(project.getRemoteArtifactRepositories()).setManagedVersionMap(managedVersions).setMetadataSource(artifactMetadataSource);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 15328,
		"linenumber" : 38,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.log = new PrintWriter(logFile);]this.log = new PrintWriter(new FileWriter(logFile));",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 15466,
		"linenumber" : 31,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 15751,
		"linenumber" : 648,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new InvalidProjectModelException(projectId, pomLocation, e.getMessage(), e);]new InvalidProjectModelException(projectId, e.getMessage(), pomLocation, e);",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 15846,
		"linenumber" : 53,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(projectId, message, pomLocation);]this(projectId, message, new File(pomLocation), validationResult);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 16015,
		"linenumber" : 737,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "ctx.addReport(mojoDescriptor, (MavenReport) plugin);]ctx.addReport(mojoDescriptor, (MavenReport) mojo);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 16022,
		"linenumber" : 920,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "(ContextEnabled) plugin.setPluginContext(pluginContext);](ContextEnabled) mojo.setPluginContext(pluginContext);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 16059,
		"linenumber" : 83,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new File(new URI(resourceUrl.toString()));]new File(new URI(resourceUrl.toString().replaceAll(\" \", \"%20\")));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 16358,
		"linenumber" : 116,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "List<String> list = new ArrayList<String>();]List list = new ArrayList();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 16364,
		"linenumber" : 33,
		"changeype" : "ADDITIONAL_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "org.apache.maven.project.error.DefaultProjectErrorReporter.formattedMessages : Map",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 16364,
		"linenumber" : 33,
		"changeype" : "REMOVED_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "org.apache.maven.project.error.DefaultProjectErrorReporter.formattedMessages : Map<Throwable, String>",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 16638,
		"linenumber" : 256,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! artifact.getArtifactHandler().isIncludesDependencies())](! artifactHandlerManager.getArtifactHandler(artifact.getType()).isIncludesDependencies())",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 16644,
		"linenumber" : 249,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! artifactHandlerManager.getArtifactHandler(artifact.getType()).isIncludesDependencies())](! artifact.getArtifactHandler().isIncludesDependencies())",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 16693,
		"linenumber" : 16,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 16890,
		"linenumber" : 462,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "List metadataVersions = repoMetadata.getVersioning().getVersions();",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 16891,
		"linenumber" : 463,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "versions = new ArrayList(metadataVersions.size());",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 16895,
		"linenumber" : 18,
		"changeype" : "PARAMETER_TYPE_CHANGE",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "unprefixedPathKeys: List",
		"parententity" : "PARAMETER"
	},
	{
		"linetupleid" : 16913,
		"linenumber" : 290,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Iterator it = feedback.iterator();]Iterator<?> it = feedback.iterator();",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 16993,
		"linenumber" : 167,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 17033,
		"linenumber" : 80,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "ModelProperty mp:properties]ModelProperty mp:this.properties",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 17039,
		"linenumber" : 143,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String groupId = ((model.getGroupId() == null) ? model.getParent().getGroupId() : model.getGroupId());]String groupId = (((model.getGroupId() == null) && (model.getParent() != null)) ? model.getParent().getGroupId() : model.getGroupId());",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 17040,
		"linenumber" : 144,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String artifactId = ((model.getArtifactId() == null) ? model.getParent().getArtifactId() : model.getArtifactId());]String artifactId = (((model.getArtifactId() == null) && (model.getParent() != null)) ? model.getParent().getArtifactId() : model.getArtifactId());",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 17041,
		"linenumber" : 146,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String version = ((model.getVersion() == null) ? model.getParent().getVersion() : model.getVersion());]String version = (((model.getVersion() == null) && (model.getParent() != null)) ? model.getParent().getVersion() : model.getVersion());",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 17042,
		"linenumber" : 52,
		"changeype" : "ADDING_ATTRIBUTE_MODIFIABILITY",
		"changeentity" : "MODIFIER",
		"changecontent" : "final",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 17045,
		"linenumber" : 333,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((domainModels.indexOf(domainModel) > 0) && (((((uri.equals(ProjectUri.name) || uri.equals(ProjectUri.packaging)) || uri.startsWith(ProjectUri.Profiles.xUri)) || uri.startsWith(ProjectUri.Build.Resources.xUri)) || uri.startsWith(ProjectUri.Build.TestResources.xUri)) || uri.startsWith(ProjectUri.PluginRepositories.xUri)))]((domainModels.indexOf(domainModel) > 0) && ((uri.equals(ProjectUri.name) || uri.equals(ProjectUri.packaging)) || uri.startsWith(ProjectUri.Profiles.xUri)))",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 17111,
		"linenumber" : 134,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "interpolatorProperties.add(new InterpolatorProperty((String) e.getKey(), (String) e.getValue()));]interpolatorProperties.add(new InterpolatorProperty(((\"${\" + e.getKey()) + \"}\"), (String) e.getValue()));",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 17122,
		"linenumber" : 146,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "InterpolatorProperty ip:interpolatorProperties]InterpolatorProperty ip:ips",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 17188,
		"linenumber" : 259,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((mavenRange != null) && (! mavenRange.containsVersion(runtimeInformation.getApplicationVersion())))]((mavenRange != null) && (! mavenRange.containsVersion(runtimeInformation.getApplicationInformation().getVersion())))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 17214,
		"linenumber" : 379,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! siteUrlProperty.getResolvedValue().endsWith(\"}\"))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 17214,
		"linenumber" : 382,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! siteUrl.toString().endsWith(\"/\"))",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 17215,
		"linenumber" : 380,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "siteUrl.append(siteUrlProperty.getResolvedValue().substring(0, siteUrlProperty.getResolvedValue().lastIndexOf(\"/\")));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 17215,
		"linenumber" : 380,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "siteUrl.append(siteUrlProperty.getResolvedValue().substring(0, siteUrlProperty.getResolvedValue().lastIndexOf(\"/\")));]siteUrl.append(siteUrlProperty.getResolvedValue());",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 17217,
		"linenumber" : 383,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "siteUrl.append(\"/\");",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 17217,
		"linenumber" : 384,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "siteUrl.append(\"/\").append(projectName);]siteUrl.append(projectName);",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 17231,
		"linenumber" : 166,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "modelProperties.add(new ModelProperty(tagName, tagValue));]modelProperties.add(new ModelProperty(tagName, tagValue.toString()));",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 17272,
		"linenumber" : 174,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "PomClassicDomainModel transformedDomainModel = (PomClassicDomainModel) ctx.transform(domainModels, transformer, transformer, importModels, properties, Arrays.asList((ModelEventListener) new PluginExtensionListener()));]PomClassicDomainModel transformedDomainModel = (PomClassicDomainModel) ctx.transform(domainModels, transformer, transformer, importModels, properties, Arrays.asList((ModelEventListener) new BuildExtensionListener()));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 17452,
		"linenumber" : 171,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "pluginMappingManager.getByPrefix(prefix, session.getSettings().getPluginGroups(), project.getRemoteArtifactRepositories(), session.getLocalRepository());]pluginMappingManager.getByPrefix(prefix, session.getPluginGroups(), project.getRemoteArtifactRepositories(), session.getLocalRepository());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 17461,
		"linenumber" : 144,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "ModelContainer dependencyContainer:source.queryFor(ProjectUri.Build.Plugins.Plugin.xUri)]ModelContainer pluginContainer:source.queryFor(ProjectUri.Build.Plugins.Plugin.xUri)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 17462,
		"linenumber" : 155,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "ModelProperty mp:dependencyContainer.getProperties()]ModelProperty mp:pluginContainer.getProperties()",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 17480,
		"linenumber" : 151,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "mp.getUri().startsWith(ProjectUri.DependencyManagement.xUri)]mp.getUri().startsWith(ProjectUri.Build.PluginManagement.xUri)",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 17481,
		"linenumber" : 153,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "transformedProperties.add(new ModelProperty(mp.getUri().replace(ProjectUri.DependencyManagement.xUri, ProjectUri.xUri), mp.getResolvedValue()));]transformedProperties.add(new ModelProperty(mp.getUri().replace(ProjectUri.Build.PluginManagement.xUri, ProjectUri.Build.xUri), mp.getResolvedValue()));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 17623,
		"linenumber" : 366,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "List<ModelProperty> x = ((! foobar.containsAll(es.getProperties())) ? rule.execute(es.getProperties()) : ModelTransformerContext.sort(rule.execute(es.getProperties()), ProjectUri.Build.Plugins.Plugin.Executions.Execution.xUri));]List<ModelProperty> x = ((! joinedContainer) ? rule.execute(es.getProperties()) : ModelTransformerContext.sort(rule.execute(es.getProperties()), ProjectUri.Build.Plugins.Plugin.Executions.Execution.xUri));",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 17709,
		"linenumber" : 11,
		"changeype" : "PARENT_CLASS_CHANGE",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "IPomClassicDomainModel]PomClassicDomainModel",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 17887,
		"linenumber" : 261,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "p = ModelMarshaller.marshallXmlToModelProperties(new ByteArrayInputStream(writer.getBuffer().toString().getBytes()), ProjectUri.Profiles.Profile.xUri, PomTransformer.URIS);]p = ModelMarshaller.marshallXmlToModelProperties(new ByteArrayInputStream(writer.getBuffer().toString().getBytes()), ProjectUri.Profiles.xUri, PomTransformer.URIS);",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 17929,
		"linenumber" : 426,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "ResolutionNode node:result.getArtifactResolutionNodes()]Artifact requestedArtifact:result.getRequestedArtifacts()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 18055,
		"linenumber" : 109,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((missingArtifacts == null) ? Collections.EMPTY_LIST : missingArtifacts);]((missingArtifacts == null) ? Collections.<Artifact>emptyList() : missingArtifacts);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 18082,
		"linenumber" : 179,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "sb.append((\"         layout: \" + layout.getId())).append(\"\\n\");]sb.append((((\"         layout: \" + layout) != null) ? layout.getId() : \"none\")).append(\"\\n\");",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 18198,
		"linenumber" : 34,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "ModelContainer mc1:exclusionContainers.subList((exclusionContainers.indexOf(mc) + 1), exclusionContainers.size())]ModelContainer mc1:exclusionContainers",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 18397,
		"linenumber" : 200,
		"changeype" : "ATTRIBUTE_TYPE_CHANGE",
		"changeentity" : "PARAMETERIZED_TYPE",
		"changecontent" : "List<ActiveProfileMatcher>]List<ProfileMatcher>",
		"parententity" : "FIELD"
	},
	{
		"linetupleid" : 18575,
		"linenumber" : 124,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "root = (isPlugin ? mavenPluginArtifact : mavenRootArtifact);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 18575,
		"linenumber" : 124,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "root = (isPlugin ? mavenPluginArtifact : mavenRootArtifact);]root = (isPlugin ? mavenPluginArtifact : rootArtifact);",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 18575,
		"linenumber" : 190,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "root = (isPlugin ? mavenPluginArtifact : rootArtifact);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 18590,
		"linenumber" : 457,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "List<ModelProperty> modelProperties = dm.getModelProperties();]List<ModelProperty> modelProperties = getModelProperties(dm.getInputStream());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 18625,
		"linenumber" : 135,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "sb.append(d.getGroupId()).append(\":\").append(d.getArtifactId()).append(\":\");]sb.append(((d.getGroupId() != null) ? d.getGroupId() : \"org.apache.maven.plugins\")).append(\":\").append(d.getArtifactId()).append(\":\");",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 18651,
		"linenumber" : 72,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "metadata.setScope(((d.getScope() == null) ? \"runtime\" : d.getScope()));]metadata.setScope(((d.getScope() == null) ? \"compile\" : d.getScope()));",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 18662,
		"linenumber" : 29,
		"changeype" : "UNCLASSIFIED_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "abstract",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 18728,
		"linenumber" : 27,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super((((\"Build in root directory: \" + executionRootDirectory) + \" failed during execution of aggregator mojo: \") + MojoBindingUtils.toString(binding)), cause);]super(((\"Build in root directory: \" + executionRootDirectory) + \" failed during execution of aggregator mojo.\"), cause);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 18738,
		"linenumber" : 389,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "MavenSession session = new MavenSession(container, request, dispatcher, reactorManager);]MavenSession session = new MavenSession(container, request, reactorManager, dispatcher);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 18785,
		"linenumber" : 118,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(List<String>) lifecycle.getPhases().values();](List<String>) lifecycle.getPhases();",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 19048,
		"linenumber" : 19,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "InterpolatorProperty ip:properties]Entry<Object, Object> ip:properties.entrySet()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 19052,
		"linenumber" : 19,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.interpolatorProperties = ((interpolatorProperties != null) ? interpolatorProperties : new ArrayList<InterpolatorProperty>());]this.interpolatorProperties = ((interpolatorProperties != null) ? interpolatorProperties : new Properties());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 19056,
		"linenumber" : 52,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "InterpolatorProperty ip:properties]Entry<Object, Object> ip:properties.entrySet()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 19058,
		"linenumber" : 54,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "ip.getValue().equals(value);](String) ip.getValue().equals(value);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 19124,
		"linenumber" : 361,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "List<String> phasesWithMojosToExecute = new ArrayList<String>();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 19125,
		"linenumber" : 348,
		"changeype" : "STATEMENT_ORDERING_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "List<String> mojos:phaseToMojoMapping.values()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 19125,
		"linenumber" : 348,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "List<String> mojos:phaseToMojoMapping.values()]String phase:phaseToMojoMapping.keySet()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 19127,
		"linenumber" : 599,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "xmlStreamReader.next();",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 19127,
		"linenumber" : 600,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "type = parser.next();",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 19129,
		"linenumber" : 612,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "XmlPullParser.START_TAG",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 19129,
		"linenumber" : 615,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "XMLStreamConstants.START_ELEMENT",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 19136,
		"linenumber" : 664,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "XmlPullParser.END_DOCUMENT",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 19136,
		"linenumber" : 668,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "XMLStreamConstants.END_DOCUMENT",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 19368,
		"linenumber" : 35,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 19625,
		"linenumber" : 45,
		"changeype" : "PARAMETER_ORDERING_CHANGE",
		"changeentity" : "PARAMETER",
		"changecontent" : "message",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 19808,
		"linenumber" : 905,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "ArtifactRepository repository:session.getCurrentProject().getRemoteArtifactRepositories()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 19842,
		"linenumber" : 21,
		"changeype" : "PARAMETER_DELETE",
		"changeentity" : "PARAMETER",
		"changecontent" : "requiredDependencyResolutionScope",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 19842,
		"linenumber" : 22,
		"changeype" : "PARAMETER_INSERT",
		"changeentity" : "PARAMETER",
		"changecontent" : "requiredDependencyResolutionScopes",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 19870,
		"linenumber" : 127,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Model current = model;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 19870,
		"linenumber" : 127,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "current = readParent(current, request, problems);",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 19870,
		"linenumber" : 127,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(current != null)](currentData != null)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 19870,
		"linenumber" : 127,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "current = readParent(current, request, problems);]currentData = readParent(tmpModel, request, problems);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 20174,
		"linenumber" : 209,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Iterator i = new HashSet(remoteRepositories).iterator();]Iterator<ArtifactRepository> i = new HashSet<ArtifactRepository>(remoteRepositories).iterator();",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 20183,
		"linenumber" : 853,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "execution.setId((\"default-\" + p[2]));]execution.setId((\"default-\" + p[(p.length - 1)]));",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 20363,
		"linenumber" : 290,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((introducedDependencyArtifacts != null) ? introducedDependencyArtifacts : Collections.EMPTY_SET);]((introducedDependencyArtifacts != null) ? introducedDependencyArtifacts : Collections.<Artifact>emptySet());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 20388,
		"linenumber" : 174,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "MavenExecutionPlan executionPlan = calculateExecutionPlan(session, goals.toArray(new String[]{}));]MavenExecutionPlan executionPlan = calculateExecutionPlan(session, goals.toArray(new String[goals.size()]));",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 20691,
		"linenumber" : 331,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "mojoDescriptor = pluginManager.getMojoDescriptor(mojoExecution.getPlugin(), mojoExecution.getGoal(), session.getLocalRepository(), project.getPluginArtifactRepositories());]mojoDescriptor = pluginManager.getMojoDescriptor(mojoExecution.getPlugin(), mojoExecution.getGoal(), getRepositoryRequest(session, project));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 20858,
		"linenumber" : 40,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super((\"Plugin could not be resolved: \" + e.getMessage()), e.getGroupId(), e.getArtifactId(), e.getVersion(), \"maven-plugin\", null, e.getRemoteRepositories(), null, e.getCause());]super((\"Plugin or one of its dependencies could not be resolved: \" + e.getMessage()), e.getGroupId(), e.getArtifactId(), e.getVersion(), e.getType(), null, e.getRemoteRepositories(), null, e.getCause());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 20939,
		"linenumber" : 272,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Map<String, Object> options = Collections.<String, Object>singletonMap(ModelReader.IS_STRICT, Boolean.valueOf(strict));]Map<String, ?> options = Collections.singletonMap(ModelReader.IS_STRICT, Boolean.valueOf(strict));",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 20985,
		"linenumber" : 125,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "request.setLifecycleListeners(Arrays.<LifecycleListener>asList(new LifecycleEventLogger(logger)));]request.setExecutionListeners(Arrays.<ExecutionListener>asList(new ExecutionEventLogger(logger)));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 21303,
		"linenumber" : 64,
		"changeype" : "UNCLASSIFIED_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "synchronized",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 21443,
		"linenumber" : 82,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((artifactEquals(artifact, other.artifact) && (resolveManagedVersions == other.resolveManagedVersions)) && repositories.equals(other.repositories));]((((pomHash == other.pomHash) && artifactEquals(artifact, other.artifact)) && (resolveManagedVersions == other.resolveManagedVersions)) && repositoriesEquals(repositories, other.repositories));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 21676,
		"linenumber" : 213,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "request.commandLine = cliManager.parse(request.args);]cliRequest.commandLine = cliManager.parse(cliRequest.args);",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 21677,
		"linenumber" : 217,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "request.stderr.println((\"Unable to parse command line options: \" + e.getMessage()));]cliRequest.stderr.println((\"Unable to parse command line options: \" + e.getMessage()));",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 21678,
		"linenumber" : 218,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "cliManager.displayHelp(request.stdout);]cliManager.displayHelp(cliRequest.stdout);",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 21679,
		"linenumber" : 219,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "request.exit = Exit.EXIT_WITH_ERROR;]cliRequest.exit = Exit.EXIT_WITH_ERROR;",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 21711,
		"linenumber" : 484,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "referenceKey = ((\"[\" + references.size()) + \"]\");]referenceKey = ((\"[Help \" + (references.size() + 1)) + \"]\");",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 21931,
		"linenumber" : 127,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! rangeValue.isClosed())](! rangeValue.closed)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 22032,
		"linenumber" : 130,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String type = ((transferEvent.getRequestType() == ArtifactTransferEvent.REQUEST_PUT) ? \"uploaded\" : \"downloaded\");]String type = ((transferEvent.getRequestType() == ArtifactTransferEvent.REQUEST_PUT) ? \"Uploaded\" : \"Downloaded\");",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 22033,
		"linenumber" : 132,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String l = ((contentLength >= 1024) ? (toKB(contentLength) + \" KB\") : (contentLength + \" B\"));]String len = ((contentLength >= 1024) ? (toKB(contentLength) + \" KB\") : (contentLength + \" B\"));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 22046,
		"linenumber" : 241,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "boolean localProject = ((artifact.getRepository() != null) && \"reactor\".equals(artifact.getRepository().getId()));]boolean localProject = ((artifact.getRepository() != null) && artifact.getRepository().isProjectAware());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 22273,
		"linenumber" : 417,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "logger.warn(((problem.getMessage() + \" @ \") + problem.getLocation()));]logger.warn(((problem.getMessage() + \" @ \") + ModelProblemUtils.formatLocation(problem, result.getProjectId())));",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 22276,
		"linenumber" : 59,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.projectId = ((project != null) ? project.getId() : \"\");]this.projectId = ((project != null) ? ((((project.getGroupId() + \':\') + project.getArtifactId()) + \':\') + project.getVersion()) : \"\");",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 22313,
		"linenumber" : 372,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String prefix = (managed ? \"dependencyManagement.dependencies.dependency.\" : \"dependencies.dependency.\");]String prefix = (management ? \"dependencyManagement.dependencies.dependency.\" : \"dependencies.dependency.\");",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 22410,
		"linenumber" : 579,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int i = 0;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 22410,
		"linenumber" : 579,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "i ++;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 22410,
		"linenumber" : 579,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < n)](i >= 0)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 22410,
		"linenumber" : 579,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int n = (lineage.size() - 1);]int i = (lineage.size() - 1);",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 22410,
		"linenumber" : 591,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "i --;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 22584,
		"linenumber" : 305,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Item l = (left.hasNext() ? (Item) left.next() : null);]Item l = (left.hasNext() ? left.next() : null);",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 22585,
		"linenumber" : 306,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Item r = (right.hasNext() ? (Item) right.next() : null);]Item r = (right.hasNext() ? right.next() : null);",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 22619,
		"linenumber" : 111,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new ProfileActivator[]{new JdkVersionProfileActivator(), new OperatingSystemProfileActivator(), new PropertyProfileActivator(), new FileProfileActivator()};]new ProfileActivator[]{new JdkVersionProfileActivator(), new OperatingSystemProfileActivator(), new PropertyProfileActivator(), new FileProfileActivator().setPathTranslator(newPathTranslator())};",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 22701,
		"linenumber" : 77,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "hash = ((hash * 31) + ((dependencyFilter != null) ? dependencyFilter.hashCode() : 0));]hash = ((hash * 31) + hash(dependencyFilter));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 22703,
		"linenumber" : 102,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(((((parentRealm == other.parentRealm) && pluginEquals(plugin, other.plugin)) && eq(repositories, other.repositories)) && eq(filter, other.filter)) && eq(parentImports, other.parentImports));](((((((parentRealm == that.parentRealm) && CacheUtils.pluginEquals(plugin, that.plugin)) && eq(workspace, that.workspace)) && eq(localRepo, that.localRepo)) && CacheUtils.repositoriesEquals(this.repositories, that.repositories)) && eq(filter, that.filter)) && eq(parentImports, that.parentImports));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 22732,
		"linenumber" : 39,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super((((\"Plugin \" + plugin.getId()) + \" or one of its dependencies could not be resolved: \") + e.getMessage()), e.getGroupId(), e.getArtifactId(), e.getVersion(), e.getType(), null, e.getRemoteRepositories(), null, e);]super((((\"Plugin \" + plugin.getId()) + \" or one of its dependencies could not be resolved: \") + cause.getMessage()), cause);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 22810,
		"linenumber" : 55,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "Map.Entry<ArtifactTransferResource, Long> entry:downloads.entrySet()]Map.Entry<TransferResource, Long> entry:downloads.entrySet()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 22871,
		"linenumber" : 246,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CATCH_CLAUSE",
		"changecontent" : "ArtifactResolutionException]org.sonatype.aether.resolution.ArtifactResolutionException",
		"parententity" : "CATCH_CLAUSES"
	},
	{
		"linetupleid" : 22877,
		"linenumber" : 84,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new NoPluginFoundForPrefixException(request.getPrefix(), request.getPluginGroups(), request.getLocalRepository(), request.getRemoteRepositories());]new NoPluginFoundForPrefixException(request.getPrefix(), request.getPluginGroups(), request.getRepositorySession().getLocalRepository(), request.getRepositories());",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 22944,
		"linenumber" : 47,
		"changeype" : "ATTRIBUTE_RENAMING",
		"changeentity" : "FIELD",
		"changecontent" : "org.apache.maven.lifecycle.internal.DependencyContext.lastProject : MavenProject",
		"parententity" : "FIELD"
	},
	{
		"linetupleid" : 22944,
		"linenumber" : 47,
		"changeype" : "UNCLASSIFIED_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "volatile",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 23004,
		"linenumber" : 57,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "buffer.append(\"Could not find goal \").append(goal);]buffer.append(\"Could not find goal \\\'\").append(goal).append(\"\\\'\");",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 23081,
		"linenumber" : 643,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((value != null) && (value.indexOf(\"${\") >= 0));]((value != null) && value.contains(\"${\"));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 23127,
		"linenumber" : 87,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.parentImports = ((parentImports != null) ? parentImports : Collections.<String>emptyList());]this.foreignImports = ((foreignImports != null) ? foreignImports : Collections.<String, ClassLoader>emptyMap());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 23271,
		"linenumber" : 200,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "result = new RemoteRepository(repo.getId(), repo.getLayout().getId(), repo.getUrl());]result = new RemoteRepository(repo.getId(), getLayout(repo), repo.getUrl());",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 23273,
		"linenumber" : 183,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "sb.append(\"   layout: \").append(((layout != null) ? layout.getId() : \"none\")).append(\"\\n\");]sb.append(\"   layout: \").append(((layout != null) ? layout : \"none\")).append(\"\\n\");",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 23528,
		"linenumber" : 64,
		"changeype" : "ATTRIBUTE_TYPE_CHANGE",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "String",
		"parententity" : "FIELD"
	},
	{
		"linetupleid" : 23602,
		"linenumber" : 156,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((cache != null) && (! ConfigurationProperties.get(session, \"aether.versionResolver.noCache\", false)))]((cache != null) && (! ConfigUtils.getBoolean(session, false, \"aether.versionResolver.noCache\")))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 23635,
		"linenumber" : 54,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String LS = System.getProperty(\"line.separator\");]final String LS = System.getProperty(\"line.separator\");",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 23678,
		"linenumber" : 86,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "msg += ((rev != null) ? (\"r\" + rev) : \"\");]msg += ((rev != null) ? rev : \"\");",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 23745,
		"linenumber" : 368,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "private",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 24057,
		"linenumber" : 85,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "private",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 24057,
		"linenumber" : 87,
		"changeype" : "UNCLASSIFIED_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "static",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 24093,
		"linenumber" : 225,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(e.getCause() instanceof org.sonatype.aether.transfer.ArtifactNotFoundException)](e.getCause() instanceof org.eclipse.aether.transfer.ArtifactNotFoundException)",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 24383,
		"linenumber" : 78,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((inherited != null) && (! Boolean.valueOf(inherited).booleanValue()))]((inherited != null) && (! Boolean.valueOf(inherited)))",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 24483,
		"linenumber" : 625,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new org.apache.maven.DuplicateProjectException((StringLiteralConcatenation{\"Two or more projects in the reactor\"+\n\" have the same identifier, please make sure that <groupId>:<artifactId>:<version>\"+\n\" is unique for each project: \"+\n} + collisions), collisions);]new DuplicateProjectException((StringLiteralConcatenation{\"Two or more projects in the reactor\"+\n\" have the same identifier, please make sure that <groupId>:<artifactId>:<version>\"+\n\" is unique for each project: \"+\n} + collisions), collisions);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 24509,
		"linenumber" : 184,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "(MojoExecutionListener) provided.afterMojoExecutionSuccess();](WeakMojoExecutionListener) provided.afterMojoExecutionSuccess(session, project, execution, mojo);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 24592,
		"linenumber" : 117,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "transferred = (transferred.longValue() + length);]transferred = (transferred + length);",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 24611,
		"linenumber" : 312,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int result = ((l == null) ? ((- 1) * r.compareTo(l)) : l.compareTo(r));]int result = ((l == null) ? ((r == null) ? 0 : ((- 1) * r.compareTo(l))) : l.compareTo(r));",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 24645,
		"linenumber" : 24,
		"changeype" : "RETURN_TYPE_CHANGE",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "Cmd_HelloWorld.init(Hashtable): void]Cmd_HelloWorld.init(Hashtable): Object",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 24647,
		"linenumber" : 40,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "interval = 60;]interval = 30;",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 24648,
		"linenumber" : 109,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "buffer.getPath().equals(path)]buffer.getPath().equals(name)",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 24655,
		"linenumber" : 35,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 24655,
		"linenumber" : 36,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "Boolean.FALSE;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 24700,
		"linenumber" : 52,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "System.err.println(\"    -version: Print jEdit version\");",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 24701,
		"linenumber" : 53,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "System.err.println(\"    -usage: Print this message\");]System.err.println(\"    -usage: Print this message and exit\");",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 24706,
		"linenumber" : 41,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "System.err.println(StringLiteralConcatenation{\"    -portfile=<file>: File with port\"+\n\" number\"+\n});]System.err.println(StringLiteralConcatenation{\"    -portfile=<file>: File with server\"+\n\" port\"+\n});",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 24711,
		"linenumber" : 112,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "buffers.openBuffers(args);]buffers.openFiles(args);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 24713,
		"linenumber" : 132,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "ex.printStackTrace();]e.printStackTrace();",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 24714,
		"linenumber" : 26,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "null;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 24714,
		"linenumber" : 26,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "Boolean.TRUE;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 24716,
		"linenumber" : 113,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CATCH_CLAUSE",
		"changecontent" : "Exception]IOException",
		"parententity" : "CATCH_CLAUSES"
	},
	{
		"linetupleid" : 24718,
		"linenumber" : 169,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "path = (String) JOptionPane.showInputDialog(view, jEdit.props.getProperty(\"saveurl.message\"), jEdit.props.getProperty(\"saveurl.title\"), JOptionPane.QUESTION_MESSAGE, null, null, jEdit.props.getProperty(\"lasturl\"));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 24718,
		"linenumber" : 196,
		"changeype" : "ALTERNATIVE_PART_INSERT",
		"changeentity" : "ELSE_STATEMENT",
		"changecontent" : "newFile",
		"parententity" : "IF_STATEMENT"
	},
	{
		"linetupleid" : 24719,
		"linenumber" : 176,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(path != null)",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 24719,
		"linenumber" : 193,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "newFile",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 24720,
		"linenumber" : 198,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CATCH_CLAUSE",
		"changecontent" : "Exception]IOException",
		"parententity" : "CATCH_CLAUSES"
	},
	{
		"linetupleid" : 24721,
		"linenumber" : 200,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Object[] args = {getPath(), e.toString()};]Object[] args = {getPath(), io.toString()};",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 24724,
		"linenumber" : 72,
		"changeype" : "METHOD_RENAMING",
		"changeentity" : "METHOD",
		"changecontent" : "BufferMgr.openBuffers(String[])",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 24727,
		"linenumber" : 89,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "openBuffer(null, name, true);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 24727,
		"linenumber" : 124,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "openFile(null, path, true);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 24728,
		"linenumber" : 92,
		"changeype" : "METHOD_RENAMING",
		"changeentity" : "METHOD",
		"changecontent" : "BufferMgr.openBuffer(View,String)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 24728,
		"linenumber" : 92,
		"changeype" : "PARAMETER_RENAMING",
		"changeentity" : "PARAMETER",
		"changecontent" : "name]path",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 24728,
		"linenumber" : 92,
		"changeype" : "PARAMETER_TYPE_CHANGE",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "name: String]path: String",
		"parententity" : "PARAMETER"
	},
	{
		"linetupleid" : 24734,
		"linenumber" : 154,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Buffer buffer = new Buffer(view, name, load);]Buffer buffer = new Buffer(view, path, load);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 24819,
		"linenumber" : 77,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String parent = null;]String parent = \"\";",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 24820,
		"linenumber" : 215,
		"changeype" : "UNCLASSIFIED_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "synchronized",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 24822,
		"linenumber" : 35,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "jEdit.buffers.openFile(view, (jEdit.props.getProperty(\"helpdir\") + arg));]jEdit.buffers.openFile(view, ((jEdit.props.getProperty(\"helpdir\") + File.separator) + arg));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 24827,
		"linenumber" : 417,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "jEdit.cmds.execCommand(this, \"close_view\");",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 24827,
		"linenumber" : 422,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "jEdit.buffers.closeView(this);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 24834,
		"linenumber" : 692,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! dirty)](! (dirty || readOnly))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 24862,
		"linenumber" : 122,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Reader in;",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 24862,
		"linenumber" : 125,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "InputStream in;",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 24863,
		"linenumber" : 125,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "in = new InputStreamReader(url.openStream());]in = url.openStream();",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 24866,
		"linenumber" : 164,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "in = new FileReader(markersFile);]in = new FileInputStream(markersFile);",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 24867,
		"linenumber" : 342,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "save(new FileWriter(autosaveFile));]save(new FileOutputStream(autosaveFile));",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 24876,
		"linenumber" : 46,
		"changeype" : "ATTRIBUTE_RENAMING",
		"changeentity" : "FIELD",
		"changecontent" : "Options.maxRecent : JTextField",
		"parententity" : "FIELD"
	},
	{
		"linetupleid" : 24877,
		"linenumber" : 60,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "constraints.anchor = constraints.EAST;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 24877,
		"linenumber" : 85,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "constraints.weightx = 1.0f;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 24898,
		"linenumber" : 72,
		"changeype" : "PARAMETER_INSERT",
		"changeentity" : "PARAMETER",
		"changecontent" : "parent",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 24898,
		"linenumber" : 75,
		"changeype" : "PARAMETER_DELETE",
		"changeentity" : "PARAMETER",
		"changecontent" : "view",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 24898,
		"linenumber" : 75,
		"changeype" : "PARAMETER_RENAMING",
		"changeentity" : "PARAMETER",
		"changecontent" : "name]path",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 24898,
		"linenumber" : 75,
		"changeype" : "PARAMETER_TYPE_CHANGE",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "name: String]path: String",
		"parententity" : "PARAMETER"
	},
	{
		"linetupleid" : 24911,
		"linenumber" : 51,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(view, jEdit.props.getProperty(\"search.title\"), true);]super(view, jEdit.props.getProperty(\"search.title\"), false);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 24912,
		"linenumber" : 191,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "command = ((\"MAIL FROM: \" + from) + CRLF);]command = (((\"MAIL FROM: \\\"\" + from) + \"\\\"\") + CRLF);",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 24914,
		"linenumber" : 32,
		"changeype" : "ADDITIONAL_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "PropsMgr.USER_PROPS : String",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 24914,
		"linenumber" : 32,
		"changeype" : "REMOVED_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "PropsMgr.usrProps : String",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 24922,
		"linenumber" : 260,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "menuItem.setActionCommand(\"open@\".concat(name));]menuItem.setActionCommand(\"open_file@\".concat(name));",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 24926,
		"linenumber" : 74,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "portFile = new File(System.getProperty(\"user.home\"), props.getProperty(\"server.portfile\", \".jedit-server\"));]portFile = new File(System.getProperty(\"user.home\"), \".jedit-server\");",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 24929,
		"linenumber" : 57,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String portFilename = ((System.getProperty(\"user.home\") + File.separator) + \".jedit-port\");]String portFilename = ((System.getProperty(\"user.home\") + File.separator) + \".jedit-server\");",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 24934,
		"linenumber" : 368,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String path = (String) JOptionPane.showInputDialog(view, jEdit.props.getProperty(\"saveurl.message\"), jEdit.props.getProperty(\"saveurl.title\"), JOptionPane.QUESTION_MESSAGE, null, null, jEdit.props.getProperty(\"lasturl\"));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 24934,
		"linenumber" : 470,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String path = jEdit.input(view, \"saveurl\", \"lasturl\");",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 24935,
		"linenumber" : 408,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "dirty = (newFile = false);]dirty = (newFile = (readOnly = false));",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 24936,
		"linenumber" : 687,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "path = file.getCanonicalPath();]this.path = file.getCanonicalPath();",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 24949,
		"linenumber" : 40,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "arg = jEdit.input(view, \"clearmarker\", \"lastmarker\");",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 24949,
		"linenumber" : 40,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "arg = (String) JOptionPane.showInputDialog(view, jEdit.props.getProperty(\"clearmarker.message\"), jEdit.props.getProperty(\"clearmarker.title\"), JOptionPane.QUESTION_MESSAGE);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 24959,
		"linenumber" : 83,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! endOpts)](filename.startsWith(\"-\") && (! endOpts))",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 24969,
		"linenumber" : 476,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String path = jEdit.input(view, \"saveurl\", \"lasturl\");]String path = jEdit.input(view, \"saveurl\", \"openurl.url\");",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 24987,
		"linenumber" : 201,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "openFile(view, jEdit.props.getProperty(\"untitled\", args), false, true);]openFile(view, null, jEdit.props.getProperty(StringLiteralConcatenation{\"buffermgr.\"+\n\"untitled\"+\n}, args), false, true);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25030,
		"linenumber" : 232,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "name.equals(buffer.getPath())](buffer == b)",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 25038,
		"linenumber" : 50,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "System.err.println((((\"jOpen \" + VERSION) + \" build \") + BUILD));]System.err.println((((\"jOpen \" + jEdit.VERSION) + \" build \") + jEdit.BUILD));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25108,
		"linenumber" : 34,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int dot = view.getTextArea().getCaretPosition();]int dot = view.getTextArea().getSelectionStart();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25114,
		"linenumber" : 370,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((mode != null) && autoindent)]((mode != null) && jEdit.getAutoIndent())",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 25120,
		"linenumber" : 669,
		"changeype" : "PARAMETER_DELETE",
		"changeentity" : "PARAMETER",
		"changecontent" : "parent",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 25120,
		"linenumber" : 680,
		"changeype" : "PARAMETER_INSERT",
		"changeentity" : "PARAMETER",
		"changecontent" : "url",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 25127,
		"linenumber" : 95,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((lineLength > maxLineLength) || (lineLength < minLineLength))]((lineLength >= maxLineLength) || (i == (chars.length - 1)))",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 25130,
		"linenumber" : 26,
		"changeype" : "PARENT_CLASS_INSERT",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "autoindent",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 25130,
		"linenumber" : 26,
		"changeype" : "PARENT_INTERFACE_DELETE",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "Mode",
		"parententity" : "SUPER_INTERFACE_TYPES"
	},
	{
		"linetupleid" : 25134,
		"linenumber" : 37,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "protected",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 25140,
		"linenumber" : 48,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "char c = line.charAt((dot - start));]char c = line.charAt((i - start));",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 25142,
		"linenumber" : 78,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int j = index;]int j = (index + 1);",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 25143,
		"linenumber" : 48,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String line = jEdit.untab(getTabSize(), buffer.getText(start, (lineElement.getEndOffset() - start)));]String line = jEdit.untab(getTabSize(), buffer.getText(start, (lineElement.getEndOffset() - (start + 1))));",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 25150,
		"linenumber" : 50,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "tokens.addElement(new JSToken(line.substring(lastOffset, i), token));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 25150,
		"linenumber" : 50,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "tokens.addElement(new JSToken(line.substring(lastOffset, i), token));]tokens.addElement(new JSToken(line.substring(lastOffset, i), null));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 25158,
		"linenumber" : 408,
		"changeype" : "PARAMETER_TYPE_CHANGE",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "tokenMarker: JSTokenMarker]tokenMarker: TokenMarker",
		"parententity" : "PARAMETER"
	},
	{
		"linetupleid" : 25159,
		"linenumber" : 670,
		"changeype" : "ATTRIBUTE_TYPE_CHANGE",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "JSTokenMarker]TokenMarker",
		"parententity" : "FIELD"
	},
	{
		"linetupleid" : 25167,
		"linenumber" : 36,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int offset = line.offset;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25167,
		"linenumber" : 36,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int lastOffset = 0;]int lastOffset = offset;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25168,
		"linenumber" : 37,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int length = line.length();]int length = (line.count + offset);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25169,
		"linenumber" : 38,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int i = 0;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 25169,
		"linenumber" : 39,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int i = line.offset;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 25172,
		"linenumber" : 49,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(((length - i) <= 3) || (line.charAt((i + 2)) == \' \'))](((length - i) <= 3) || (line.array[(i + 2)] == \' \'))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 25180,
		"linenumber" : 99,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "line.regionMatches(true, (i - 3), \"rem\", 0, 3)]jEdit.regionMatches(true, line, (i - 3), \"rem\")",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 25184,
		"linenumber" : 26,
		"changeype" : "PARENT_CLASS_DELETE",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "autoindent",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 25184,
		"linenumber" : 27,
		"changeype" : "PARENT_INTERFACE_INSERT",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "Mode",
		"parententity" : "SUPER_INTERFACE_TYPES"
	},
	{
		"linetupleid" : 25196,
		"linenumber" : 77,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((i >= 2) && line.regionMatches((i - 2), \"-->\", 0, 3))]((i >= 2) && jEdit.regionMatches(false, line, (i - 2), \"-->\"))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 25210,
		"linenumber" : 93,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "SWITCH_STATEMENT",
		"changecontent" : "line.charAt((i + 1))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 25210,
		"linenumber" : 98,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "SWITCH_STATEMENT",
		"changecontent" : "line.array[(i + 1)]",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 25234,
		"linenumber" : 65,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int length = tokens.length;",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 25234,
		"linenumber" : 65,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "JSToken token = (JSToken) enum1.nextElement();",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 25235,
		"linenumber" : 67,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Object id = token.id;",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 25235,
		"linenumber" : 67,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Object id = token.id;]String id = tokens.id;",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 25238,
		"linenumber" : 134,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "data.addElement(((i + \":\") + jEdit.untab(tabSize, lineString)));]data.addElement(((i + \":\") + lineString));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 25251,
		"linenumber" : 85,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "addToken((i - lastOffset), LABEL);]addToken(((i + 1) - lastOffset), LABEL);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 25252,
		"linenumber" : 86,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "lastOffset = i;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 25254,
		"linenumber" : 110,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Buffer buffer = null;",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 25254,
		"linenumber" : 111,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Buffer b;",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 25260,
		"linenumber" : 40,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int leftMargin;]final int leftMargin;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25261,
		"linenumber" : 51,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "buffer.getText(start, ((lineElement.getEndOffset() - start) - 1));]buffer.getText(start, (lineElement.getEndOffset() - (start + 1)));",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 25263,
		"linenumber" : 179,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "command = (((\"MAIL FROM: \\\"\" + from) + \"\\\"\") + CRLF);]command = (((\"MAIL FROM: <\" + from) + \">\") + CRLF);",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 25268,
		"linenumber" : 227,
		"changeype" : "ADDITIONAL_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "org.gjt.sp.jedit.BufferMgr.newView(Buffer)",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 25268,
		"linenumber" : 227,
		"changeype" : "REMOVED_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "org.gjt.sp.jedit.BufferMgr.newView(View)",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 25280,
		"linenumber" : 238,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(getMode(name) != null)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25286,
		"linenumber" : 123,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "jEdit.buffers.newView(null).setBuffer(buffer);]jEdit.buffers.newView(buffer);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 25294,
		"linenumber" : 541,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i >= 5)](i >= 0)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25294,
		"linenumber" : 541,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int i = (clsName.length - 1);]int i = (clsName.length - 6);",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 25296,
		"linenumber" : 443,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String prop = jEdit.props.getProperty(\"colors.\".concat(name));]String prop = jEdit.props.getProperty((\"mode.\".concat(name) + \".colors\"));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25297,
		"linenumber" : 740,
		"changeype" : "STATEMENT_ORDERING_CHANGE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Mode mode = jEdit.cmds.getMode(jEdit.props.getProperty(\"mode.\".concat(nogzName.substring(index))));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 25297,
		"linenumber" : 740,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Mode mode = jEdit.cmds.getMode(jEdit.props.getProperty(\"mode.\".concat(nogzName.substring(index))));]Mode mode = jEdit.cmds.getMode(jEdit.props.getProperty(\"mode.filename.\".concat(nogzName)));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 25306,
		"linenumber" : 72,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((i >= 2) && jEdit.regionMatches(false, line, (i - 2), \"-->\"))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 25306,
		"linenumber" : 125,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "jEdit.regionMatches(false, line, (i - 2), \"-->\")",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 25315,
		"linenumber" : 177,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "commands.put(name, obj);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 25315,
		"linenumber" : 200,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "initCommand(name);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 25316,
		"linenumber" : 178,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(Command) obj;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 25316,
		"linenumber" : 201,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(Command) commands.get(name);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 25321,
		"linenumber" : 297,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "textArea.setDocument(this.buffer);]textArea.setDocument(buffer);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25326,
		"linenumber" : 159,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "System.err.println(StringLiteralConcatenation{\">> ERROR LOADING SYSTEM PROPERTIES <<\\n\"+\n\"The jEdit system properties file `jedit.props\\\'\\n\"+\n\"could not be loaded. Try reinstalling jEdit.\"+\n});]System.err.println(StringLiteralConcatenation{\">> ERROR LOADING SYSTEM PROPERTIES <<\\n\"+\n\"One of the following property files could not be loaded:\\n\"+\n\"- jedit.props\"+\n\"- jedit_gui.props\"+\n\"- jedit_keys.props\"+\n\"Try reinstalling jEdit.\"+\n});",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25328,
		"linenumber" : 48,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(view, jEdit.props.getProperty(\"hypersearch.title\"), false);]super(view, jEdit.getProperty(\"hypersearch.title\"), false);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25329,
		"linenumber" : 55,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "panel.add(\"West\", new JLabel(jEdit.props.getProperty(\"hypersearch.find\")));]panel.add(\"West\", new JLabel(jEdit.getProperty(\"hypersearch.find\")));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25330,
		"linenumber" : 57,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "find = new JTextField(jEdit.props.getProperty(StringLiteralConcatenation{\"search.find\"+\n\".value\"+\n}), 20);]find = new JTextField(jEdit.getProperty(\"search.find.value\"), 20);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25340,
		"linenumber" : 123,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "RE regexp = new RE(find.getText(), (ignoreCase.getModel().isSelected() ? RE.REG_ICASE : 0), jEdit.getRESyntax(jEdit.props.getProperty(\"search.regexp.value\")));]RE regexp = new RE(find.getText(), (ignoreCase.getModel().isSelected() ? RE.REG_ICASE : 0), jEdit.getRESyntax(jEdit.getProperty(\"search.regexp.value\")));",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 25346,
		"linenumber" : 425,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "jEdit.cmds.getModeName(mode);]jEdit.getModeName(mode);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25347,
		"linenumber" : 504,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String prop = jEdit.props.getProperty((\"mode.\".concat(name) + \".colors\"));]String prop = jEdit.getProperty(((\"mode.\" + name) + \".colors\"));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25468,
		"linenumber" : 100,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "openRecent.add(jEdit.getAction(\"no-recent\"));]openRecent.add(jEdit.loadMenuItem(this, \"no-recent\"));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 25469,
		"linenumber" : 358,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "status = new JLabel(\"Tastes like chicken!\");",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25469,
		"linenumber" : 372,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "status = new JLabel(\"Try our new product: soap! `It\\\'s fresh!\\\'\");",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25480,
		"linenumber" : 60,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "addToken(((i + 1) - lastOffset), COMMAND);]addToken(((i + 1) - lastOffset), token);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 25490,
		"linenumber" : 1229,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String value = jEdit.getProperty((((\"mode.\" + clazz.substring(clazz.lastIndexOf(\'.\'))) + \".\") + key));]String value = jEdit.getProperty((((\"mode.\" + clazz.substring((clazz.lastIndexOf(\'.\') + 1))) + \".\") + key));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25505,
		"linenumber" : 396,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(lineCount - 1);]lineCount;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25513,
		"linenumber" : 41,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int lineNo = (map.getElementIndex(textArea.getSelectionEnd()) + 1);]int lineNo = map.getElementIndex(textArea.getSelectionEnd());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25518,
		"linenumber" : 171,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "index += subst.length();]index = (start + subst.length());",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 25532,
		"linenumber" : 44,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int len = (lineElement.getEndOffset() - start);]int len = ((lineElement.getEndOffset() - start) - 1);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25541,
		"linenumber" : 267,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "out = new FileOutputStream(file);]out = new FileOutputStream(saveFile);",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 25542,
		"linenumber" : 268,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "name.endsWith(\".gz\")]path.endsWith(\".gz\")",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 25554,
		"linenumber" : 41,
		"changeype" : "STATEMENT_ORDERING_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((lineElement.getEndOffset() + 1) >= buffer.getLength())",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25554,
		"linenumber" : 41,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((lineElement.getEndOffset() + 1) >= buffer.getLength())](! view.getTextArea().isEditable())",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25554,
		"linenumber" : 46,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(lineElement.getEndOffset() >= buffer.getLength())",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25566,
		"linenumber" : 79,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int i = (lineNo - 1);]int i = lineNo;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 25579,
		"linenumber" : 117,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "addToken((length - lastOffset), ((lastOffset == offset) ? COMMAND : token));]addToken((length - lastOffset), ((lastOffset == offset) ? Token.KEYWORD1 : token));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 25780,
		"linenumber" : 53,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "buffer.remove((lineElement.getEndOffset() - 1), 1);",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 25780,
		"linenumber" : 59,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "buffer.remove((end - 1), (jEdit.getLeadingWhiteSpace(buffer.getText(nextStart, (nextEnd - nextStart))) + 1));",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 25783,
		"linenumber" : 268,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "SyntaxTextArea.SyntaxCaret.this.setVisible(true);]SyntaxCaret.this.setVisible(true);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25803,
		"linenumber" : 50,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CLASS_INSTANCE_CREATION",
		"changecontent" : "new ErrorList(view, makeTool, Runtime.getRuntime().exec(makeTool));]new CommandOutput(view, makeTool, Runtime.getRuntime().exec(makeTool));",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 25817,
		"linenumber" : 148,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String[] makes = {\"make\", \"nmake\"};]String[] makes = {\"make\", \"nmake.exe\"};",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25822,
		"linenumber" : 94,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "URL url = history[(-- historyPos)];]URL url = history[((-- historyPos) - 1)];",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 25838,
		"linenumber" : 294,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "dirty = (newFile = (readOnly = false));]adirty = (dirty = (newFile = (readOnly = false)));",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 25842,
		"linenumber" : 442,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "lineCount;](lineCount - 1);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25845,
		"linenumber" : 1339,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! (dirty || readOnly))](! ((dirty && adirty) || readOnly))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25858,
		"linenumber" : 48,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(result == JOptionPane.CANCEL_OPTION)](result != JOptionPane.NO_OPTION)",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 25869,
		"linenumber" : 86,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "textArea.setCaretBlinkRate(Integer.parseInt(jEdit.getProperty(\"view.caretBlinkRate\")));]textArea.getCaret().setBlinkRate(Integer.parseInt(jEdit.getProperty(\"view.caretBlinkRate\")));",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 25872,
		"linenumber" : 133,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Object[] args = {name, b.getModeName(), new Integer((b.isDirty() ? 1 : 0))};]Object[] args = {name, new Integer((b.isReadOnly() ? 1 : 0)), new Integer((b.isDirty() ? 1 : 0)), new Integer(0), null};",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 25897,
		"linenumber" : 48,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "rect.height = Math.min(rect.height, (viewHeight - rect.y));]rect.height = Math.min(viewHeight, (textArea.getSize().height - rect.y));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25907,
		"linenumber" : 173,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "((match = regexp.getMatch(getText(index, (getLength() - index)))) != null)]((match = regexp.getMatch(getText(index, (length - index)))) != null)",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 25921,
		"linenumber" : 47,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "final int leftMargin;]int leftMargin;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25924,
		"linenumber" : 639,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Object[] args = {new Integer(((dot - start) + 1)), new Integer((currLine + 1)), new Integer(numLines), new Integer(((currLine * 100) / numLines))};]Object[] args = {new Integer(((dot - start) + 1)), new Integer((currLine + 1)), new Integer(numLines), new Integer((((currLine + 1) * 100) / numLines))};",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25925,
		"linenumber" : 42,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "map = new Keyword[27];]map = new Keyword[26];",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25933,
		"linenumber" : 66,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "jEdit.regionMatches(ignoreCase, text, offset, keyword)]jEdit.regionMatches(ignoreCase, text, offset, k.keyword)",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 25960,
		"linenumber" : 402,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "keywords.add(\"ALL\", Token.KEYWORD3);]keywords.add(\"ALL\", Token.OPERATOR2);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25961,
		"linenumber" : 403,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "keywords.add(\"AND\", Token.KEYWORD3);]keywords.add(\"AND\", Token.OPERATOR2);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25962,
		"linenumber" : 404,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "keywords.add(\"ANY\", Token.KEYWORD3);]keywords.add(\"ANY\", Token.OPERATOR2);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25963,
		"linenumber" : 405,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "keywords.add(\"BETWEEN\", Token.KEYWORD3);]keywords.add(\"BETWEEN\", Token.OPERATOR2);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25964,
		"linenumber" : 406,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "keywords.add(\"CROSS\", Token.KEYWORD3);]keywords.add(\"CROSS\", Token.OPERATOR2);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25965,
		"linenumber" : 407,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "keywords.add(\"EXISTS\", Token.KEYWORD3);]keywords.add(\"EXISTS\", Token.OPERATOR2);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25966,
		"linenumber" : 408,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "keywords.add(\"IN\", Token.KEYWORD3);]keywords.add(\"IN\", Token.OPERATOR2);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25967,
		"linenumber" : 409,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "keywords.add(\"INTERSECT\", Token.KEYWORD3);]keywords.add(\"INTERSECT\", Token.OPERATOR2);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25968,
		"linenumber" : 410,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "keywords.add(\"JOIN\", Token.KEYWORD3);]keywords.add(\"JOIN\", Token.OPERATOR2);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25969,
		"linenumber" : 411,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "keywords.add(\"LIKE\", Token.KEYWORD3);]keywords.add(\"LIKE\", Token.OPERATOR2);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25970,
		"linenumber" : 412,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "keywords.add(\"NOT\", Token.KEYWORD3);]keywords.add(\"NOT\", Token.OPERATOR2);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25971,
		"linenumber" : 413,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "keywords.add(\"NULL\", Token.KEYWORD3);]keywords.add(\"NULL\", Token.OPERATOR2);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25972,
		"linenumber" : 414,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "keywords.add(\"OR\", Token.KEYWORD3);]keywords.add(\"OR\", Token.OPERATOR2);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25973,
		"linenumber" : 415,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "keywords.add(\"OUTER\", Token.KEYWORD3);]keywords.add(\"OUTER\", Token.OPERATOR2);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25974,
		"linenumber" : 416,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "keywords.add(\"SOME\", Token.KEYWORD3);]keywords.add(\"SOME\", Token.OPERATOR2);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 25992,
		"linenumber" : 90,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(((token == null) && (i > offset)) && Character.isLetter(line.array[(i - 1)]))](((token == null) && (i > offset)) && (Character.isLetter(line.array[(i - 1)]) || (line.array[(i - 1)] == \':\')))",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 26014,
		"linenumber" : 82,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "protected",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 26028,
		"linenumber" : 90,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(((token == null) && (i > offset)) && (Character.isLetter(line.array[(i - 1)]) || (line.array[(i - 1)] == \':\')))]((token == null) && (lastKeyword == offset))",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 26039,
		"linenumber" : 27,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new TSQLTokenMarker(getKeywordMap());]new SQLTokenMarker(getKeywordMap(), true);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 26046,
		"linenumber" : 87,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "map[key] = new Keyword(keyword, id, map[key]);]map[key] = new Keyword(keyword.toCharArray(), id, map[key]);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 26047,
		"linenumber" : 110,
		"changeype" : "PARAMETER_TYPE_CHANGE",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "keyword: String",
		"parententity" : "PARAMETER"
	},
	{
		"linetupleid" : 26057,
		"linenumber" : 800,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "path = jEdit.constructPath(parent, path);]path = MiscUtilities.constructPath(parent, path);",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 26160,
		"linenumber" : 46,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "addCurrentToHistory();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 26160,
		"linenumber" : 46,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "jEdit.setProperty(((\"history.\" + name) + \".0\"), getText());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 26161,
		"linenumber" : 47,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < (history.length - 1))](i < history.length)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 26172,
		"linenumber" : 106,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((((new File(getPath()).getName() + \":\") + getLineNo()) + \":\") + getError());]((((name + \":\") + getLineNo()) + \":\") + getError());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 26195,
		"linenumber" : 1139,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "i = 0;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 26221,
		"linenumber" : 75,
		"changeype" : "ATTRIBUTE_RENAMING",
		"changeentity" : "FIELD",
		"changecontent" : "org.gjt.sp.jedit.syntax.Token.OPERATOR1 : String",
		"parententity" : "FIELD"
	},
	{
		"linetupleid" : 26295,
		"linenumber" : 157,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "private",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 26319,
		"linenumber" : 736,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Mode mode = (Mode) enum1.nextElement();",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 26319,
		"linenumber" : 736,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Mode mode = (Mode) enum1.nextElement();]Mode mode = (Mode) modes.elementAt(i);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 26355,
		"linenumber" : 659,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "splitter = new JSplitPane(JSplitPane.VERTICAL_SPLIT, scroller, console);]splitter = new JSplitPane(JSplitPane.VERTICAL_SPLIT, console, scroller);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 26357,
		"linenumber" : 38,
		"changeype" : "UNCLASSIFIED_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "abstract",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 26368,
		"linenumber" : 844,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "jEdit.getAction(s).actionPerformed(new ActionEvent(this, ActionEvent.ACTION_PERFORMED, cmd));]jEdit.getAction(s).actionPerformed(new ActionEvent(View.this, ActionEvent.ACTION_PERFORMED, cmd));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 26370,
		"linenumber" : 1350,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 26383,
		"linenumber" : 28,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new CTokenMarker(true, getKeywords());]new CCTokenMarker();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 26425,
		"linenumber" : 131,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 26448,
		"linenumber" : 178,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "RE regexp = new RE(find.getText(), (ignoreCase.getModel().isSelected() ? RE.REG_ICASE : 0), jEdit.getRESyntax(jEdit.getProperty(\"search.regexp.value\")));]RE regexp = new RE((String) find.getSelectedItem(), (ignoreCase.getModel().isSelected() ? RE.REG_ICASE : 0), jEdit.getRESyntax(jEdit.getProperty(\"search.regexp.value\")));",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 26456,
		"linenumber" : 52,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < history.getSize())",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 26456,
		"linenumber" : 52,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < history.length)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 26465,
		"linenumber" : 306,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "private",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 26467,
		"linenumber" : 390,
		"changeype" : "ADDITIONAL_CLASS",
		"changeentity" : "CLASS",
		"changecontent" : "org.gjt.sp.jedit.gui.SyntaxTextArea.SyntaxSafeScroller",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 26500,
		"linenumber" : 46,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "panel.add((start = new JTextField(String.valueOf(lineNo))));]panel.add((start = new HistoryTextField(\"line\")));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 26501,
		"linenumber" : 47,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "start.addKeyListener(this);]start.getEditor().getEditorComponent().addKeyListener(this);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 26510,
		"linenumber" : 804,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "setBuffer(bufferArray[0]);]setBuffer(bufferArray[(bufferArray.length - 1)]);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 26563,
		"linenumber" : 81,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "modeNames[i] = jEdit.getModeName(modes[i]);]modeNames[(i + 1)] = jEdit.getModeName(modes[i]);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 26577,
		"linenumber" : 677,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(Action) actionHash.get(action);](EditAction) actionHash.get(action);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 26578,
		"linenumber" : 683,
		"changeype" : "RETURN_TYPE_CHANGE",
		"changeentity" : "ARRAY_TYPE",
		"changecontent" : "org.gjt.sp.jedit.jEdit.getActions(): Action]org.gjt.sp.jedit.jEdit.getActions(): EditAction",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 26579,
		"linenumber" : 687,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "actions = new Action[actionHash.size()];]actions = new EditAction[actionHash.size()];",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 26580,
		"linenumber" : 692,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "actions[(i ++)] = (Action) enum1.nextElement();]actions[(i ++)] = (EditAction) enum1.nextElement();",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 26582,
		"linenumber" : 703,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Action[] array = new Action[pluginActions.size()];]EditAction[] array = new EditAction[pluginActions.size()];",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 26583,
		"linenumber" : 1163,
		"changeype" : "ATTRIBUTE_TYPE_CHANGE",
		"changeentity" : "ARRAY_TYPE",
		"changecontent" : "Action]EditAction",
		"parententity" : "FIELD"
	},
	{
		"linetupleid" : 26595,
		"linenumber" : 149,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((((name + \":\") + getLineNo()) + \":\") + getError());]((((name + \":\") + (getLineNo() + 1)) + \":\") + getError());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 26612,
		"linenumber" : 640,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "(Hashtable) colors.clear();](Hashtable) getColors().clear();",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 26641,
		"linenumber" : 58,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int offset = buffer.locateBracketForward(dot, bracket, closeBracket);]int offset = SyntaxUtilities.locateBracketForward(buffer, dot, bracket, closeBracket);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 26686,
		"linenumber" : 619,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CLASS_INSTANCE_CREATION",
		"changecontent" : "new JARClassLoader(((directory + File.separator) + plugins[i]));]new JARClassLoader(((directory + File.separator) + plugin));",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 26731,
		"linenumber" : 140,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Object[] args = {name, new Integer((b.isReadOnly() ? 1 : 0)), new Integer((b.isDirty() ? 1 : 0)), new Integer(0), null};]Object[] args = {(b.isNewFile() ? b.getName() : name), new Integer((b.isReadOnly() ? 1 : 0)), new Integer((b.isDirty() ? 1 : 0)), new Integer(0), null};",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 26860,
		"linenumber" : 142,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(((id + \"[length=\") + length) + (nextValid ? \",nextValid]\" : \"nextInvalid]\"));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 26860,
		"linenumber" : 156,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((((\"[id=\" + id) + \",length=\") + length) + \"]\");",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 26912,
		"linenumber" : 111,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "tokens = tokens.next;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 26912,
		"linenumber" : 111,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(tokens != null)]",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 26914,
		"linenumber" : 35,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CLASS_INSTANCE_CREATION",
		"changecontent" : "new HelpViewer(getClass().getResource(\"/doc/\".concat(evt.getActionCommand())));]new HelpViewer(getClass().getResource(\"/doc/index.html\"));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 26925,
		"linenumber" : 50,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "regexpSyntax = new JComboBox(jEdit.SYNTAX_LIST);]regexpSyntax = new JComboBox(MiscUtilities.SYNTAX_LIST);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 26948,
		"linenumber" : 82,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "modeNames[(i + 1)] = jEdit.getModeName(modes[i]);]modeNames[i] = jEdit.getModeName(modes[i]);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 26960,
		"linenumber" : 181,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((portFile != null) && portFile.exists())]((portFile != null) && new File(portFile).exists())",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 27013,
		"linenumber" : 35,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "getContentPane().add(BorderLayout.CENTER, new JLabel(new ImageIcon(url)));]splash.add(new JLabel(new ImageIcon(url)), BorderLayout.CENTER);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 27051,
		"linenumber" : 36,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "clipHistory = HistoryModel.getModel(\"clipboard\");",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 27051,
		"linenumber" : 36,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "clipHistory = jEdit.getClipHistory();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 27052,
		"linenumber" : 37,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String[] abbrevClipHistory = new String[clipHistory.size()];]String[] abbrevClipHistory = new String[clipHistory.getSize()];",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 27053,
		"linenumber" : 38,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int j = (clipHistory.size() - 1);",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 27053,
		"linenumber" : 38,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < clipHistory.size())](i < clipHistory.getSize())",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 27055,
		"linenumber" : 48,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "abbrevClipHistory[j] = clip;]abbrevClipHistory[i] = clip;",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 27061,
		"linenumber" : 104,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(((getClass().getName() + \"[listener=\") + listener) + ((next == null) ? \"]\" : next.toString()));](((getClass().getName() + \"[listener=\") + listener) + ((next == null) ? \"]\" : (\"]\\n\" + next.toString())));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 27094,
		"linenumber" : 403,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "r.width = (block ? (width - 1) : 0);]r.width = ((overwrite || block) ? (width - 1) : 0);",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 27096,
		"linenumber" : 46,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "protected",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 27118,
		"linenumber" : 242,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_STATEMENT",
		"changecontent" : "keyStroke.charAt(i)]Character.toUpperCase(keyStroke.charAt(i))",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 27135,
		"linenumber" : 36,
		"changeype" : "RETURN_TYPE_CHANGE",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "Exception]IOException",
		"parententity" : "THROW"
	},
	{
		"linetupleid" : 27138,
		"linenumber" : 390,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new IllegalArgumentException(StringLiteralConcatenation{\"Document is not\"+\n\" an instance of SyntaxDOcument\"+\n});]new IllegalArgumentException(StringLiteralConcatenation{\"Document is not\"+\n\" an instance of SyntaxDocument\"+\n});",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 27144,
		"linenumber" : 246,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "out.write((((\"X-Mailer: jEdit \" + jEdit.VERSION) + \" build \") + jEdit.BUILD));]out.write((((\"X-Mailer: jEdit \" + jEdit.getVersion()) + \" build \") + jEdit.getBuild()));",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 27169,
		"linenumber" : 169,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "\'$\'",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 27169,
		"linenumber" : 169,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "\'%\'",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 27170,
		"linenumber" : 186,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "\'$\'",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 27170,
		"linenumber" : 186,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "\'%\'",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 27171,
		"linenumber" : 187,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "buf.append(\'%\');]buf.append(\'$\');",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 27186,
		"linenumber" : 293,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Object[] args = {(showFullPath ? buffer.getPath() : buffer.getName()), new Integer((buffer.isReadOnly() ? 1 : 0)), new Integer((buffer.isDirty() ? 1 : 0))};]Object[] args = {((showFullPath && (! buffer.isNewFile())) ? buffer.getPath() : buffer.getName()), new Integer((buffer.isReadOnly() ? 1 : 0)), new Integer((buffer.isDirty() ? 1 : 0))};",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 27251,
		"linenumber" : 310,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "jEdit.setProperty(\"search.regexp.toggle\", (ignoreCase ? \"on\" : \"off\"));]jEdit.setProperty(\"search.regexp.toggle\", (regexp ? \"on\" : \"off\"));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 27253,
		"linenumber" : 45,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(((length - i) <= 3) || (line.array[(i + 2)] == \' \'))](((length - i) <= 3) || (array[(i + 2)] == \' \'))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 27301,
		"linenumber" : 221,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Element lineElement = map.getElement(map.getElementIndex(pos.getOffset()));]Element lineElement = map.getElement(map.getElementIndex(result.pos.getOffset()));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 27317,
		"linenumber" : 86,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "lineLen = (dot - wordStart);]lineLen = (wordStart - lineStart);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 27341,
		"linenumber" : 343,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "Token.LITERAL1",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 27351,
		"linenumber" : 60,
		"changeype" : "ADDITIONAL_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "org.gjt.sp.jedit.syntax.SyntaxDocument.setStyles(SyntaxStyle[])",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 27351,
		"linenumber" : 65,
		"changeype" : "REMOVED_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "org.gjt.sp.jedit.syntax.SyntaxDocument.setColors(Color[])",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 27354,
		"linenumber" : 193,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "styles[Token.COMMENT1] = new SyntaxStyle(Color.black, true, false);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 27354,
		"linenumber" : 193,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "colors[Token.COMMENT1] = Color.red;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 27355,
		"linenumber" : 194,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "colors[Token.COMMENT2] = new Color(0x990033);]styles[Token.COMMENT2] = new SyntaxStyle(new Color(0x990033), true, false);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 27356,
		"linenumber" : 195,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "styles[Token.KEYWORD1] = new SyntaxStyle(Color.black, false, true);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 27356,
		"linenumber" : 195,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "colors[Token.KEYWORD1] = Color.blue;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 27357,
		"linenumber" : 196,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "colors[Token.KEYWORD2] = Color.magenta;]styles[Token.KEYWORD2] = new SyntaxStyle(Color.magenta, false, false);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 27358,
		"linenumber" : 197,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "colors[Token.KEYWORD3] = new Color(0x009600);]styles[Token.KEYWORD3] = new SyntaxStyle(new Color(0x009600), false, false);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 27359,
		"linenumber" : 198,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "colors[Token.LITERAL1] = new Color(0x650099);]styles[Token.LITERAL1] = new SyntaxStyle(new Color(0x650099), false, false);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 27360,
		"linenumber" : 199,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "colors[Token.LITERAL2] = new Color(0x650099);]styles[Token.LITERAL2] = new SyntaxStyle(new Color(0x650099), false, true);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 27361,
		"linenumber" : 200,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "styles[Token.LABEL] = new SyntaxStyle(new Color(0x990033), false, true);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 27361,
		"linenumber" : 200,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "colors[Token.LABEL] = new Color(0xcc32ff);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 27362,
		"linenumber" : 201,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "styles[Token.OPERATOR] = new SyntaxStyle(Color.black, false, true);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 27362,
		"linenumber" : 201,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "colors[Token.OPERATOR] = Color.orange;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 27363,
		"linenumber" : 202,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "styles[Token.INVALID] = new SyntaxStyle(Color.red, false, true);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 27363,
		"linenumber" : 202,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "colors[Token.INVALID] = new Color(0xff9900);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 27366,
		"linenumber" : 42,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "colors = SyntaxUtilities.getDefaultSyntaxColors();]styles = SyntaxUtilities.getDefaultSyntaxStyles();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 27379,
		"linenumber" : 40,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "splash.add(new JLabel((((\"jEdit \" + jEdit.getVersion()) + \" build \") + jEdit.getBuild()), SwingConstants.CENTER), BorderLayout.SOUTH);]splash.add(new JLabel((\"jEdit \" + jEdit.getVersion()), SwingConstants.CENTER), BorderLayout.SOUTH);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 27390,
		"linenumber" : 181,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "((buffer = fileset.getNextBuffer(view, buffer)) != null)",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 27390,
		"linenumber" : 181,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "((buffer = fileset.getNextBuffer(view, buffer)) != null)]((buffer = (repeat ? fileset.getFirstBuffer(view) : fileset.getNextBuffer(view, buffer))) != null)",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 27402,
		"linenumber" : 43,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "addOptionPane(new org.gjt.sp.jedit.options.ColorTableOptionPane());]addOptionPane(new org.gjt.sp.jedit.options.StyleOptionPane());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 27406,
		"linenumber" : 272,
		"changeype" : "REMOVING_METHOD_OVERRIDABILITY",
		"changeentity" : "MODIFIER",
		"changecontent" : "final",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 27446,
		"linenumber" : 43,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new RemoteBufferImpl(jEdit.newFile(((view == null) ? null : (RemoteViewImpl) view.view)));]new RemoteBufferImpl(jEdit.newFile(((view == null) ? null : jEdit.getView(view.getUID()))));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 27448,
		"linenumber" : 60,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "jEdit.closeBuffer(((view == null) ? null : (RemoteViewImpl) view.view), (RemoteBufferImpl) buffer.buffer);]jEdit.closeBuffer(((view == null) ? null : jEdit.getView(view.getUID())), (RemoteBufferImpl) buffer.buffer);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 27473,
		"linenumber" : 45,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "SWITCH_STATEMENT",
		"changecontent" : "token",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 27473,
		"linenumber" : 45,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "SWITCH_STATEMENT",
		"changecontent" : "array[i]",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 27476,
		"linenumber" : 737,
		"changeype" : "ADDING_ATTRIBUTE_MODIFIABILITY",
		"changeentity" : "MODIFIER",
		"changecontent" : "final",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 27527,
		"linenumber" : 267,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "Utilities.drawTabbedText(currentLine, x, y, gfx, this, 0);]textArea.checkLongestLine(lineIndex, Utilities.drawTabbedText(currentLine, x, y, gfx, this, 0));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 27536,
		"linenumber" : 168,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "count = (ch.getChildrenAdded().length + ch.getChildrenRemoved().length);]count = (ch.getChildrenAdded().length - ch.getChildrenRemoved().length);",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 27540,
		"linenumber" : 277,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "model.getLineText(lineIndex, currentLine);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 27540,
		"linenumber" : 378,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "gfx.setColor(defaultColor);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 27541,
		"linenumber" : 278,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "textArea.checkLongestLine(lineIndex, Utilities.drawTabbedText(currentLine, x, y, gfx, this, 0));]Utilities.drawTabbedText(currentLine, x, y, gfx, this, 0);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 27554,
		"linenumber" : 120,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "char c = array[(i + offset)];]char c = segmentArray[(i + segmentOffset)];",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 27572,
		"linenumber" : 364,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "DO_STATEMENT",
		"changecontent" : "paintSyntaxLine(model, gfx, tokenMarker, defaultFont, defaultColor, (lineIndex ++), x, y)",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 27572,
		"linenumber" : 376,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "DO_STATEMENT",
		"changecontent" : "tokenMarker.isNextLineRequested()",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 27640,
		"linenumber" : 281,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(x > (horizontalOffset + painter.getSize().width))]((x + width) > painter.getSize().width)",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 27648,
		"linenumber" : 166,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "jEdit.setProperty(\"view.caretBlinkRate\", (blinkCaret.getModel().isSelected() ? \"500\" : \"0\"));]jEdit.setProperty(\"view.caretBlinks\", (blinkCaret.getModel().isSelected() ? \"on\" : \"off\"));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 27651,
		"linenumber" : 429,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new NullPointerException(\"You suck!!!\");]new NullPointerException(\"Mode must be non-null\");",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 27684,
		"linenumber" : 375,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 27684,
		"linenumber" : 424,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(line <= lastLine)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 27692,
		"linenumber" : 417,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "DO_STATEMENT",
		"changecontent" : "tokenMarker.isNextLineRequested()](tokenMarker.isNextLineRequested() && ((line + count) < lastVisibleLine))",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 27714,
		"linenumber" : 591,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 27714,
		"linenumber" : 591,
		"changeype" : "PARAMETER_DELETE",
		"changeentity" : "PARAMETER",
		"changecontent" : "model",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 27714,
		"linenumber" : 630,
		"changeype" : "PARAMETER_INSERT",
		"changeentity" : "PARAMETER",
		"changecontent" : "line",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 27913,
		"linenumber" : 93,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "BREAK_STATEMENT",
		"changecontent" : "forward_scan",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 27913,
		"linenumber" : 115,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "BREAK_STATEMENT",
		"changecontent" : "",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 27918,
		"linenumber" : 180,
		"changeype" : "ADDING_METHOD_OVERRIDABILITY",
		"changeentity" : "MODIFIER",
		"changecontent" : "final",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 27960,
		"linenumber" : 39,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "CLASS_INSTANCE_CREATION",
		"changecontent" : "new HelpViewer(new URL(\"jeditdocs:\"));",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 27960,
		"linenumber" : 39,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "CLASS_INSTANCE_CREATION",
		"changecontent" : "new HelpViewer(new URL((((((\"file:\" + jEdit.getJEditHome()) + File.separator) + \"doc\") + File.separator) + \"index.html\")));",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 27961,
		"linenumber" : 55,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "clips.setFont(view.getTextArea().getFont());]clips.setFont(view.getTextArea().getPainter().getFont());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 28051,
		"linenumber" : 81,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "lastStyledFont = new Font(font.getFamily(), ((bold ? Font.BOLD : 0) | (italics ? Font.ITALIC : 0)), font.getSize());]lastStyledFont = new Font(font.getFamily(), ((bold ? Font.BOLD : 0) | (italic ? Font.ITALIC : 0)), font.getSize());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 28053,
		"linenumber" : 126,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(((((getClass().getName() + \"[color=\") + color) + (italics ? \",italics\" : \"\")) + (bold ? \",bold\" : \"\")) + \"]\");](((((getClass().getName() + \"[color=\") + color) + (italic ? \",italic\" : \"\")) + (bold ? \",bold\" : \"\")) + \"]\");",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 28109,
		"linenumber" : 132,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "((-- index) >= 0)]((-- lineIndex) >= 0)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 28121,
		"linenumber" : 93,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "enum1.hasMoreElements()](i < clipModel.getSize())",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 28122,
		"linenumber" : 95,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "jEdit.setProperty((\"clipPredefined.\" + i), (String) enum1.nextElement());]jEdit.setProperty((\"clipPredefined.\" + i), (String) clipModel.getElementAt(i));",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 28128,
		"linenumber" : 167,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "plugins[i].getClass().getName().equals(name)]plugins[i]._getName().equals(name)",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 28131,
		"linenumber" : 60,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "private",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 28132,
		"linenumber" : 61,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "private",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 28133,
		"linenumber" : 62,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "private",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 28136,
		"linenumber" : 506,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new SyntaxStyle(color, italics, bold);]new SyntaxStyle(color, italic, bold);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 28151,
		"linenumber" : 82,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(((((((getClass().getName() + \"[id=\") + id) + \",view=\") + view.getUID()) + \",buffer=\") + buffer.getUID()) + \"]\");](((((((getClass().getName() + \"[id=\") + id) + \",view=\") + view) + \",buffer=\") + buffer) + \"]\");",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 28152,
		"linenumber" : 151,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Object[] args = {(b.isNewFile() ? b.getName() : name), new Integer((b.isReadOnly() ? 1 : 0)), new Integer((b.isDirty() ? 1 : 0)), new Integer(0), null};]Object[] args = {name, new Integer((b.isReadOnly() ? 1 : 0)), new Integer((b.isDirty() ? 1 : 0)), new Integer((b.isNewFile() ? 1 : 0))};",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 28153,
		"linenumber" : 151,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Object[] args = {(b.isNewFile() ? b.getName() : name), new Integer((b.isReadOnly() ? 1 : 0)), new Integer((b.isDirty() ? 1 : 0)), new Integer(0), null};]Object[] args = {name, new Integer((b.isReadOnly() ? 1 : 0)), new Integer((b.isDirty() ? 1 : 0)), new Integer((b.isNewFile() ? 1 : 0))};",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 28165,
		"linenumber" : 43,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String[] args = new String[2];]String[] args = new String[1];",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 28205,
		"linenumber" : 700,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "chooser.addChoosableFileFilter(new REFileFilter(name, jEdit.getProperty(((\"filefilter.\" + i) + \".re\"))));]chooser.addChoosableFileFilter(new REFileFilter(name, MiscUtilities.globToRE(jEdit.getProperty(((\"filefilter.\" + i) + \".re\")))));",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 28211,
		"linenumber" : 42,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "lf.equals(lfs[i].getClass().getName())]lf.equals(lfs[i].getClassName())",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 28219,
		"linenumber" : 193,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "i ++;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 28219,
		"linenumber" : 193,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "i --;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 28223,
		"linenumber" : 229,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(repeat ? repeatCount : 1);](repeat ? Math.max(1, repeatCount) : 1);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 28300,
		"linenumber" : 456,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int i = (modes.length - 1);",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 28300,
		"linenumber" : 456,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "i --;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 28300,
		"linenumber" : 456,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i >= 0)",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 28300,
		"linenumber" : 534,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < modes.length)",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 28300,
		"linenumber" : 534,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int i = 0;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 28300,
		"linenumber" : 534,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "i ++;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 28323,
		"linenumber" : 46,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "getBuffer((String) files[0]);]getBuffer((String) files.elementAt(0));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 28325,
		"linenumber" : 61,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < (files.length - 1))](i < (files.size() - 1))",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 28338,
		"linenumber" : 405,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CLASS_INSTANCE_CREATION",
		"changecontent" : "new JARClassLoader(((directory + File.separator) + plugin));]new JARClassLoader(MiscUtilities.constructPath(directory, plugin));",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 28349,
		"linenumber" : 39,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(view, jEdit.getProperty(\"search.multifile.title\"), true);]super(view, jEdit.getProperty(\"multifile.title\"), true);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 28350,
		"linenumber" : 108,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! okClicked)](! isOK)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 28380,
		"linenumber" : 44,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String path = GUIUtilities.showFileDialog(view, MiscUtilities.constructPath(settingsDirectory, \"sessions\"), JFileChooser.SAVE_DIALOG);]String path = GUIUtilities.showFileDialog(view, MiscUtilities.constructPath(settingsDirectory, \"sessions\"), JFileChooser.OPEN_DIALOG);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 28480,
		"linenumber" : 200,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "JMenuItem menuItem = new JMenuItem(path);]EnhancedMenuItem menuItem = new EnhancedMenuItem(path, null, action);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 28493,
		"linenumber" : 81,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "bindings = new Vector((textActions.length + actions.length));]bindings = new Vector((actions.length + 20));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 28556,
		"linenumber" : 37,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 28568,
		"linenumber" : 275,
		"changeype" : "UNCLASSIFIED_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "static",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 28609,
		"linenumber" : 762,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.status = status;]StatusBar.this.status = status;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 28610,
		"linenumber" : 763,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "StatusBar.this.repaint();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 28610,
		"linenumber" : 763,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "repaint();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 28611,
		"linenumber" : 776,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String status = ((this.status != null) ? this.status : ((((((((\"col \" + ((dot - start) + 1)) + \" line \") + (currLine + 1)) + \"/\") + numLines) + \" \") + (((currLine + 1) * 100) / numLines)) + \"%\"));]String status = ((StatusBar.this.status != null) ? StatusBar.this.status : ((((((((\"col \" + ((dot - start) + 1)) + \" line \") + (currLine + 1)) + \"/\") + numLines) + \" \") + (((currLine + 1) * 100) / numLines)) + \"%\"));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 28815,
		"linenumber" : 187,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "(buffer != null)",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 28815,
		"linenumber" : 187,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "((buffer = (repeat ? fileset.getFirstBuffer(view) : fileset.getNextBuffer(view, buffer))) != null)",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 28839,
		"linenumber" : 828,
		"changeype" : "ATTRIBUTE_RENAMING",
		"changeentity" : "FIELD",
		"changecontent" : "org.gjt.sp.jedit.Buffer.INIT : int",
		"parententity" : "FIELD"
	},
	{
		"linetupleid" : 28841,
		"linenumber" : 481,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "((off < len) && (! Character.isLetterOrDigit(array[(start + off)])))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 28841,
		"linenumber" : 482,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "((idx1 <= idx2) && (! Character.isLetterOrDigit(array[idx1])))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 28842,
		"linenumber" : 482,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "off ++;",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 28842,
		"linenumber" : 483,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "idx1 ++;",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 28856,
		"linenumber" : 373,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "tabSize = (fm.charWidth(\'w\') * (Integer) textArea.getDocument().getProperty(PlainDocument.tabSizeAttribute).intValue());]tabSize = (fm.charWidth(\' \') * (Integer) textArea.getDocument().getProperty(PlainDocument.tabSizeAttribute).intValue());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 28885,
		"linenumber" : 541,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "loadImageIcon(GUIUtilities.class.getResource(\"jedit_icon1.gif\")).getImage();]new ImageIcon(GUIUtilities.class.getResource(\"jedit_icon1.gif\")).getImage();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 28985,
		"linenumber" : 505,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "caret = TextUtilities.findWordStart(lineText, caret, noWordSep);]caret = TextUtilities.findWordStart(lineText, (caret - 1), noWordSep);",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 29000,
		"linenumber" : 97,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((line.length() != 0) && ((line.charAt(0) == \'y\') || (line.charAt(0) == \'Y\')))]((line.length() != 0) && ((line.charAt(0) != \'n\') && (line.charAt(0) != \'N\')))",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 29001,
		"linenumber" : 70,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "insertTab(getTabLabel(buffer), null, new Magic(buffer), null, index);]insertTab(buffer.getName(), getIcon(buffer), new Magic(buffer), buffer.getPath(), index);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 29103,
		"linenumber" : 121,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "KeyBinding binding = (KeyBinding) bindings.elementAt(row);]ShortcutsOptionPane.KeyBinding binding = (ShortcutsOptionPane.KeyBinding) bindings.elementAt(row);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 29104,
		"linenumber" : 142,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "(KeyBinding) bindings.elementAt(row).shortcut = (String) value;](ShortcutsOptionPane.KeyBinding) bindings.elementAt(row).shortcut = (String) value;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 29123,
		"linenumber" : 240,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((jar.equals(installed[j]) && (plugin.currVersion != null)) && (plugin.currVersion.compareTo(plugin.latestVersion) < 0))]((jar.equals(installed[j]) && (plugin.currVersion != null)) && (MiscUtilities.compareVersions(plugin.currVersion, plugin.latestVersion) < 0))",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 29128,
		"linenumber" : 287,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "message = (((source + \": \") + message) + \'\\n\');]message = (message + \'\\n\');",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 29325,
		"linenumber" : 305,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(lastToken.next == null)](info.lastToken.next == null)",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 29326,
		"linenumber" : 307,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "lastToken.next = new Token(length, id);]info.lastToken.next = new Token(length, id);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 29327,
		"linenumber" : 308,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "lastToken = lastToken.next;]info.lastToken = info.lastToken.next;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 29579,
		"linenumber" : 231,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "protected",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 29595,
		"linenumber" : 283,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(listener instanceof Wrapper)](listener instanceof EditAction.Wrapper)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 29623,
		"linenumber" : 479,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "TokenMarker.AC_DATATYPE;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 29633,
		"linenumber" : 410,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((tempRule = context.rules.getEscapeRule()) != null)]((rule = context.rules.getEscapeRule()) != null)",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 29658,
		"linenumber" : 34,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int ruleAction = (((((TokenMarker.SPAN | id) | (noLineBreak ? TokenMarker.NO_LINE_BREAK : 0)) | (atLineStart ? TokenMarker.AT_LINE_START : 0)) | (excludeMatch ? TokenMarker.EXCLUDE_MATCH : 0)) | (noWordBreak ? TokenMarker.NO_WORD_BREAK : 0));]int ruleAction = ((((TokenMarker.SPAN | (noLineBreak ? TokenMarker.NO_LINE_BREAK : 0)) | (atLineStart ? TokenMarker.AT_LINE_START : 0)) | (excludeMatch ? TokenMarker.EXCLUDE_MATCH : 0)) | (noWordBreak ? TokenMarker.NO_WORD_BREAK : 0));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 29743,
		"linenumber" : 53,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Vector bindings = new Vector((actions.length + 40));]Vector bindings = new Vector(actions.length);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 29745,
		"linenumber" : 205,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(o instanceof ActionListener)](o instanceof EditAction)",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 29746,
		"linenumber" : 209,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "executeAction((ActionListener) o, evt.getSource(), null);]executeAction((EditAction) o, evt.getSource(), null);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 29808,
		"linenumber" : 35,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "gutterExpanded.getModel().setSelected((! \"yes\".equals(jEdit.getProperty(\"view.gutter.collapsed\"))));]gutterExpanded.getModel().setSelected((! jEdit.getBooleanProperty(\"view.gutter.collapsed\")));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 29815,
		"linenumber" : 46,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "keepDialog = new JCheckBox(jEdit.getProperty(\"search.keepDialog\"), \"on\".equals(jEdit.getProperty(\"search.keepDialog.toggle\")));]keepDialog = new JCheckBox(jEdit.getProperty(\"search.keepDialog\"), jEdit.getBooleanProperty(\"search.keepDialog.toggle\"));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 29829,
		"linenumber" : 67,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! \"yes\".equals(jEdit.getProperty(\"view.homeEnd\")))](! jEdit.getBooleanProperty(\"view.homeEnd\"))",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 29878,
		"linenumber" : 628,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "lastKeyword = (lastOffset = (pos + pattern.count));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 29878,
		"linenumber" : 628,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "lastKeyword = (lastOffset = (pos + pattern.count));]lastOffset = (lastKeyword = (pos + pattern.count));",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 29900,
		"linenumber" : 80,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "(requestCount != 0)](firstRequest != null)",
		"parententity" : "SYNCHRONIZED_STATEMENT"
	},
	{
		"linetupleid" : 29951,
		"linenumber" : 42,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(view.getTextArea().getInputHandler().getMacroRecorder() != null)](view.getInputHandler().getMacroRecorder() != null)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 30028,
		"linenumber" : 78,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "topFields.add((host = new JTextField(_host)));]topFields.add((hostField = new JTextField(host)));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 30029,
		"linenumber" : 79,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "topFields.add((username = new JTextField(_username)));]topFields.add((userField = new JTextField(user)));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 30030,
		"linenumber" : 80,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "topFields.add((password = new JPasswordField(_password)));]topFields.add((passwordField = new JPasswordField(password)));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 30031,
		"linenumber" : 81,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "topFields.add((path = new JTextField(_path)));]topFields.add((pathField = new JTextField(path)));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 30092,
		"linenumber" : 179,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int i = 0;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 30092,
		"linenumber" : 179,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "i ++;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 30092,
		"linenumber" : 179,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < develComp.getComponentCount())",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 30113,
		"linenumber" : 31,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "JEditTextArea[] textAreas = view.getTextAreas();]EditPane[] editPanes = view.getEditPanes();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 30114,
		"linenumber" : 31,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "EditPane editPane = view.getEditPane();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 30114,
		"linenumber" : 32,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "JEditTextArea textArea = view.getTextArea();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 30115,
		"linenumber" : 32,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < editPanes.length)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 30115,
		"linenumber" : 33,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < textAreas.length)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 30116,
		"linenumber" : 34,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(editPane == editPanes[i])",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 30116,
		"linenumber" : 35,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(textArea == textAreas[i])",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 30117,
		"linenumber" : 36,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(i == (editPanes.length - 1))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 30117,
		"linenumber" : 37,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(i == (textAreas.length - 1))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 30118,
		"linenumber" : 37,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "editPane = editPanes[0];",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 30118,
		"linenumber" : 38,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "textArea = textAreas[0];",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 30201,
		"linenumber" : 87,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "topFields.setBorder(new EmptyBorder(0, 0, 0, 5));]topFields.setBorder(new EmptyBorder(0, 0, 5, 0));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 30250,
		"linenumber" : 51,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "in = JARClassLoader.getClassLoader(pluginIndex).getResourceAsStream(resource);]in = jEdit.getPluginJAR(pluginIndex).getClassLoader().getResourceAsStream(resource);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 30327,
		"linenumber" : 142,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "loadedTree.insert(new DefaultMutableTreeNode(new Entry(path, classes[i]), false), loadedTree.getChildCount());]loadedTree.insert(new DefaultMutableTreeNode(new Entry(path, loaded[i]), false), loadedTree.getChildCount());",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 30706,
		"linenumber" : 514,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "fileIcon = (\"file:\" + path);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 30706,
		"linenumber" : 514,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "fileIcon = (\"file://\" + path.replace(File.separatorChar, \'/\'));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 30715,
		"linenumber" : 191,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 30720,
		"linenumber" : 32,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super((\"SIM - installing \" + appName));]super((\"Installing \" + appName));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 30734,
		"linenumber" : 123,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((((label + \":\") + name) + \":\") + path);]((name + \":\") + path);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 30788,
		"linenumber" : 893,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 30818,
		"linenumber" : 120,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(repeat ? Math.max(1, repeatCount) : 1);](repeat ? repeatCount : 1);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 30848,
		"linenumber" : 94,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "SYNCHRONIZED_STATEMENT",
		"changecontent" : "pool.waitForAllLock",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 30848,
		"linenumber" : 180,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "SYNCHRONIZED_STATEMENT",
		"changecontent" : "lock",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 30860,
		"linenumber" : 1268,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 30958,
		"linenumber" : 147,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "long length = vfs._getFileLength(buffer, path);]long length = vfs._getFileLength(session, path, view);",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 30959,
		"linenumber" : 148,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "in = vfs._createInputStream(view, buffer, path, false);]in = vfs._createInputStream(session, path, false, view);",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 31003,
		"linenumber" : 390,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "address.user = (String) buffer.getProperty(USERNAME_PROPERTY);]address.user = (String) session.get(USERNAME_KEY);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 31011,
		"linenumber" : 60,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "user = (String) buffer.getProperty(FtpVFS.USERNAME_PROPERTY);]user = (String) buffer.getVFSSession().get(FtpVFS.USERNAME_KEY);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 31021,
		"linenumber" : 146,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "((count = in.read(buf, 0, BUFSIZ)) != (- 1))]((count = in.read(buf, 0, BUFSIZE)) != (- 1))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 31054,
		"linenumber" : 80,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new Point((cellRect.x + 20), cellRect.y);]new Point((cellRect.x + 21), (cellRect.y + 2));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 31055,
		"linenumber" : 89,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(vr.contains((cellRect.x + 22), (cellRect.y + 2)) && vr.contains((((cellRect.x + 22) + cellRect.width) - 31), (((cellRect.y + 2) + cellRect.height) - 4)));](vr.contains(cellRect.x, cellRect.y) && vr.contains((cellRect.x + cellRect.width), (cellRect.y + cellRect.height)));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 31074,
		"linenumber" : 428,
		"changeype" : "ADDITIONAL_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "org.gjt.sp.jedit.browser.VFSBrowser.addToFavorites : JButton",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 31074,
		"linenumber" : 428,
		"changeype" : "ADDITIONAL_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "org.gjt.sp.jedit.browser.VFSBrowser.gotoFavorites : JButton",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 31074,
		"linenumber" : 429,
		"changeype" : "ATTRIBUTE_RENAMING",
		"changeentity" : "FIELD",
		"changecontent" : "org.gjt.sp.jedit.browser.VFSBrowser.filesystems : JButton",
		"parententity" : "FIELD"
	},
	{
		"linetupleid" : 31151,
		"linenumber" : 151,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new VFS.DirectoryEntry(file.getName(), MiscUtilities.constructPath(null, path, true), path, type, file.length(), fsView.isHiddenFile(file));]new VFS.DirectoryEntry(file.getName(), path, path, type, file.length(), fsView.isHiddenFile(file));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 31238,
		"linenumber" : 76,
		"changeype" : "PARAMETER_ORDERING_CHANGE",
		"changeentity" : "PARAMETER",
		"changecontent" : "vfs",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 31238,
		"linenumber" : 77,
		"changeype" : "PARAMETER_INSERT",
		"changeentity" : "PARAMETER",
		"changecontent" : "session",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 31453,
		"linenumber" : 156,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(j > (tokenListOffset - len))](j >= Math.max(0, (tokenListOffset - len)))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 31462,
		"linenumber" : 60,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int top = (position.equals(DockableWindowManager.BOTTOM) ? 3 : 0);]int top = (position.equals(DockableWindowManager.BOTTOM) ? 5 : 0);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 31463,
		"linenumber" : 61,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int left = (position.equals(DockableWindowManager.RIGHT) ? 3 : 0);]int left = (position.equals(DockableWindowManager.RIGHT) ? 5 : 0);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 31464,
		"linenumber" : 62,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int bottom = (position.equals(DockableWindowManager.TOP) ? 3 : 0);]int bottom = (position.equals(DockableWindowManager.TOP) ? 5 : 0);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 31465,
		"linenumber" : 63,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int right = (position.equals(DockableWindowManager.LEFT) ? 3 : 0);]int right = (position.equals(DockableWindowManager.LEFT) ? 5 : 0);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 31510,
		"linenumber" : 812,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "EDITOR_WINDOW_ICON.getImage();](ImageIcon) EDITOR_WINDOW_ICON.getImage();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 31548,
		"linenumber" : 120,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "j = first_j;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 31548,
		"linenumber" : 120,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "PREFIX_EXPRESSION",
		"changecontent" : "-- j;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 31548,
		"linenumber" : 120,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(j >= 0)",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 31548,
		"linenumber" : 120,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(j >= 0)](pos >= 0)",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 31548,
		"linenumber" : 162,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "pos = pattern_end;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 31548,
		"linenumber" : 162,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "PREFIX_EXPRESSION",
		"changecontent" : "-- pos;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 31550,
		"linenumber" : 181,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "i --;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 31550,
		"linenumber" : 264,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "PREFIX_EXPRESSION",
		"changecontent" : "-- i;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 31758,
		"linenumber" : 215,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i >= 0)",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 31758,
		"linenumber" : 215,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i >= 0)](j >= 0)",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 31758,
		"linenumber" : 215,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int i = (resultModel.getSize() - 1);]int i = (resultTreeRoot.getChildCount() - 1);",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 31775,
		"linenumber" : 101,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "TokenMarker tokenMarker = (syntax ? textArea.getTokenMarker() : NullTokenMarker.getSharedInstance());]TokenMarker tokenMarker = (syntax ? textArea.getTokenMarker() : new NullTokenMarker());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 31839,
		"linenumber" : 70,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new int[]{pos, (pos + pattern.length)};]new int[]{(pos - text.offset), ((pos + pattern.length) - text.offset)};",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 31906,
		"linenumber" : 489,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_STATEMENT",
		"changecontent" : "evt.getKeyCode()]evt.getKeyChar()",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 31990,
		"linenumber" : 107,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(repeat ? repeatCount : 1);]((repeat && (repeatCount > 0)) ? repeatCount : 1);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 32031,
		"linenumber" : 72,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "VFSBrowser browser = (VFSBrowser) dockableWindowManager.getDockableWindow(VFSBrowserDockable.NAME).getComponent();]VFSBrowser browser = (VFSBrowser) dockableWindowManager.getDockableWindow(VFSBrowser.NAME);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 32081,
		"linenumber" : 453,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "boolean replaceEnabled = (! (incrementalSearch.isSelected() || batchSearch.isSelected()));]boolean replaceEnabled = (! batchSearch.isSelected());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 32121,
		"linenumber" : 219,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "view.getDockableWindowManager().addDockableWindow(BatchSearchResults.NAME);]view.getDockableWindowManager().addDockableWindow(HyperSearchResults.NAME);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 32122,
		"linenumber" : 221,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "final BatchSearchResults results = (BatchSearchResults) view.getDockableWindowManager().getDockableWindow(BatchSearchResults.NAME);]final HyperSearchResults results = (HyperSearchResults) view.getDockableWindowManager().getDockableWindow(HyperSearchResults.NAME);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 32177,
		"linenumber" : 148,
		"changeype" : "ADDITIONAL_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "Wizard.pagesPanel : JPanel",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 32177,
		"linenumber" : 149,
		"changeype" : "REMOVED_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "Wizard.PADDING : int",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 32192,
		"linenumber" : 344,
		"changeype" : "STATEMENT_ORDERING_CHANGE",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "MouseEvent.MOUSE_PRESSED",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 32192,
		"linenumber" : 345,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "MouseEvent.MOUSE_CLICKED",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 32194,
		"linenumber" : 631,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((((\"\" + major) + \".\") + minor) + (((beta == 99) && (bugfix == 0)) ? \"final\" : ((beta == 99) ? (\".\" + bugfix) : (\"pre\" + beta))));](((((\"\" + major) + \".\") + minor) + ((beta != 99) ? (\"pre\" + beta) : \"\")) + ((bugfix != 0) ? (\".\" + bugfix) : \"\"));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 32240,
		"linenumber" : 222,
		"changeype" : "REMOVED_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "org.gjt.sp.jedit.EditServer.handleClient(Socket,BufferedReader)",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 32240,
		"linenumber" : 236,
		"changeype" : "ADDITIONAL_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "org.gjt.sp.jedit.EditServer.handleClient(String,StringTokenizer)",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 32299,
		"linenumber" : 48,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new BufferedReader(new FileReader(path));",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 32299,
		"linenumber" : 50,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new BufferedReader(new InputStreamReader(getClass().getResourceAsStream(\"/org/gjt/sp/jedit/xmode.dtd\")));",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 32357,
		"linenumber" : 79,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(line <= lastLine)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 32357,
		"linenumber" : 79,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int line = firstLine;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 32357,
		"linenumber" : 80,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "line ++;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 32357,
		"linenumber" : 80,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "y += lineHeight;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 32681,
		"linenumber" : 446,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(index == pLength)",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 32682,
		"linenumber" : 426,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new REException(\"no end of subexpression\", REException.REG_ESUBREG, index);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 32682,
		"linenumber" : 447,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new REException(\"unmatched \\\'(\\\'\", REException.REG_EPAREN, (index - 1));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 32693,
		"linenumber" : 425,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(index >= pLength)",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 32870,
		"linenumber" : 162,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "(anchor <= last_anchor)](reverseSearch ? (anchor >= last_anchor) : (anchor <= last_anchor))",
		"parententity" : "LABELED_STATEMENT"
	},
	{
		"linetupleid" : 32871,
		"linenumber" : 166,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "ch = (ignoreCase ? Character.toUpperCase(text[(anchor + pos)]) : text[(anchor + pos)]);]ch = (ignoreCase ? Character.toUpperCase(text[idx]) : text[idx]);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 32903,
		"linenumber" : 40,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((m_index += index) < s.length());]((anchor += index) < s.length());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 32904,
		"linenumber" : 92,
		"changeype" : "REMOVING_CLASS_DERIVABILITY",
		"changeentity" : "MODIFIER",
		"changecontent" : "final",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 32919,
		"linenumber" : 455,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int useIndex = (pure ? 0 : nextSub);]int useIndex = (pure ? 0 : (nextSub + numSubs));",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 33070,
		"linenumber" : 68,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((m_buffer != null) && (m_bufpos < m_buffer.length()))]((buffer != null) && (bufpos < buffer.length()))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 33071,
		"linenumber" : 69,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(int) m_buffer.charAt((m_bufpos ++));](int) buffer.charAt((bufpos ++));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 33140,
		"linenumber" : 745,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "recent = (currentDirectory = (clearMarker = (gotoMarker = (macros = (plugins = (help = null))))));]recent = (currentDirectory = (markers = (macros = (plugins = (help = null)))));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 33141,
		"linenumber" : 68,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "boolean highlightCurrentLine = (currentLineHighlightEnabled && (textArea.getSelectionStart() == textArea.getSelectionEnd()));]boolean highlightCurrentLine = (currentLineHighlightEnabled && (textArea.selection == null));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 33181,
		"linenumber" : 148,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "GUIUtilities.error(view, \"beanshell-notfound\", new String[]{path});",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 33181,
		"linenumber" : 148,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "GUIUtilities.error(view, \"beanshell-notfound\", new String[]{path});]GUIUtilities.error(view, \"ioerror\", new String[]{e.getMessage()});",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 33238,
		"linenumber" : 335,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "size += installer.getIntProperty(((\"comp.\" + i) + \".size\"));]size += installer.getIntProperty(((\"comp.\" + filesets.elementAt(i)) + \".size\"));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 33240,
		"linenumber" : 335,
		"changeype" : "REMOVED_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "bsh.NameSpace.getAbsoluteClass(String)",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 33338,
		"linenumber" : 35,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(JOptionPane.getFrameForComponent(dialog), jEdit.getProperty(\"install-plugins.title\"), true);]super(JOptionPane.getFrameForComponent(dialog), ((mode == INSTALL) ? jEdit.getProperty(\"install-plugins.title\") : jEdit.getProperty(\"update-plugins.title\")), true);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 33550,
		"linenumber" : 287,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "description.setText((plugin.description + ((buf.length() == 0) ? \"\" : (jEdit.getProperty(StringLiteralConcatenation{\"install-plugins.info\"+\n\".also-install\"+\n}) + buf.toString()))));]description.setText((plugin.description + ((buf.length() == 0) ? \"\" : ((jEdit.getProperty(StringLiteralConcatenation{\"install-plugins.info\"+\n\".also-install\"+\n}) + buf.toString()) + (branch.obsolete ? jEdit.getProperty(\"install-plugins.info.obsolete-text\") : \"\")))));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 33601,
		"linenumber" : 32,
		"changeype" : "PARAMETER_DELETE",
		"changeentity" : "PARAMETER",
		"changecontent" : "command",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 33601,
		"linenumber" : 33,
		"changeype" : "PARAMETER_INSERT",
		"changeentity" : "PARAMETER",
		"changecontent" : "shortcutData",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 33621,
		"linenumber" : 119,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "bmethod.invokeDeclaredMethod(new Object[]{method.getName(), args}, declaringInterpreter);]Primitive.unwrap(bmethod.invokeDeclaredMethod(new Object[]{method.getName(), args}, declaringInterpreter, callstack, null));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 33642,
		"linenumber" : 27,
		"changeype" : "UNCLASSIFIED_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "transient",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 33751,
		"linenumber" : 137,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new EvalError(((((((StringLiteralConcatenation{\"Invalid argument: \"+\n\"`\"+\n} + method.params.argNames[i]) + \"\\\'\") + \" for method: \") + method.name) + \" : \") + e.getMessage()), callerInfo);",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 33753,
		"linenumber" : 150,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new EvalError((((\"Undefined variable or class name, parameter: \" + method.params.argNames[i]) + \" to method: \") + method.name), callerInfo);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 33767,
		"linenumber" : 144,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "this(new InputStreamReader(console.getIn()), console.getOut(), console.getErr(), true, globalNameSpace);]this(console.getIn(), console.getOut(), console.getErr(), true, globalNameSpace);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 33821,
		"linenumber" : 164,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new EvalError(\"Null pointer error...\");",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 33821,
		"linenumber" : 324,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new TargetError((\"Null Pointer while evaluating: \" + value), new NullPointerException());",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 33854,
		"linenumber" : 335,
		"changeype" : "REMOVED_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "bsh.NameSpace.getClass(NameSpace,String)",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 33854,
		"linenumber" : 546,
		"changeype" : "ADDITIONAL_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "bsh.NameSpace.getClassImpl(String)",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 33913,
		"linenumber" : 86,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "InterpreterTreeConstants.jjtNodeName[id];]ParserTreeConstants.jjtNodeName[id];",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 33968,
		"linenumber" : 148,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "protected",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 33968,
		"linenumber" : 213,
		"changeype" : "ADDITIONAL_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "org.gjt.sp.jedit.textarea.TextRenderingManager._offsetToX(char[],int,int,Font,float,boolean)",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 33976,
		"linenumber" : 318,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "textArea.getRenderingManager().configure(antiAlias, fracFontMetrics);]textArea.getTextRenderer().configure(antiAlias, fracFontMetrics);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 34076,
		"linenumber" : 285,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "GrabKeyDialog.KeyBinding binding = getBindingAt(i);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 34076,
		"linenumber" : 285,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "GrabKeyDialog.KeyBinding binding = getBindingAt(i);]GrabKeyDialog.KeyBinding[] binding = (GrabKeyDialog.KeyBinding[]) enum1.nextElement();",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 34077,
		"linenumber" : 286,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "jEdit.setProperty((binding.name + \".shortcut\"), binding.shortcut1);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 34077,
		"linenumber" : 286,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "jEdit.setProperty((binding.name + \".shortcut\"), binding.shortcut1);]jEdit.setProperty((binding[0].name + \".shortcut\"), binding[0].shortcut);",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 34078,
		"linenumber" : 288,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "jEdit.setProperty((binding.name + \".shortcut2\"), binding.shortcut2);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 34078,
		"linenumber" : 288,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "jEdit.setProperty((binding.name + \".shortcut2\"), binding.shortcut2);]jEdit.setProperty((binding[1].name + \".shortcut2\"), binding[1].shortcut);",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 34082,
		"linenumber" : 320,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String label1 = k1.label.toLowerCase();]String label1 = k1[0].label.toLowerCase();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 34083,
		"linenumber" : 321,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String label2 = k2.label.toLowerCase();]String label2 = k2[0].label.toLowerCase();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 34102,
		"linenumber" : 441,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new Point(cellRect.x, (cellRect.y + 1));]new Point(cellRect.x, (cellRect.y - 1));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 34115,
		"linenumber" : 35,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int index = file.indexOf(\'/\', 1);]int index = file.indexOf(\'!\', 0);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 34203,
		"linenumber" : 152,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "jEdit.setProperty(\"view.electricBorders\", (electricBorders.isSelected() ? \"3\" : \"0\"));]jEdit.setIntegerProperty(\"view.electricBorders\", (electricBorders.isSelected() ? 3 : 0));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 34295,
		"linenumber" : 39,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(((m_index + index) < seg.count) ? seg.array[((seg.offset + m_index) + index)] : CharIndexed.OUT_OF_BOUNDS);]((((m_index + index) < seg.count) && ((m_index + index) >= 0)) ? seg.array[((seg.offset + m_index) + index)] : CharIndexed.OUT_OF_BOUNDS);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 34320,
		"linenumber" : 428,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 34320,
		"linenumber" : 556,
		"changeype" : "UNCLASSIFIED_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "static",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 34322,
		"linenumber" : 221,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "EditAction.getView(evt).getInputHandler().invokeAction(action);]EditAction.getView((Component) evt.getSource()).getInputHandler().invokeAction(action);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 34336,
		"linenumber" : 572,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "dimension = (getHeight() - evt.getY());]dimension = (((getHeight() - evt.getY()) - buttons.getSize().height) - SPLITTER_WIDTH);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 34363,
		"linenumber" : 104,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "scrollPosition = (- 320);]scrollPosition = (- 300);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 34369,
		"linenumber" : 160,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String label = ((action == null) ? name : action.getLabel());]String label = ((action == null) ? jEdit.getProperty((name + \".label\")) : action.getLabel());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 34388,
		"linenumber" : 68,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "pages = new Component[]{new About(), (chooseDirectory = new ChooseDirectory()), (selectComponents = new SelectComponents()), (progress = new SwingProgress()), new Complete()};]pages = new Component[]{new TextPanel(\"installer.readme\"), new TextPanel(\"installer.license\"), (chooseDirectory = new ChooseDirectory()), (selectComponents = new SelectComponents()), (progress = new SwingProgress()), new Complete()};",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 34481,
		"linenumber" : 213,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "context = (LineContext) context.parent;]context = (LineContext) context.parent.clone();",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 34574,
		"linenumber" : 148,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(Button) obj1.label.compareTo((Button) obj2.label);]MiscUtilities.compareStrings((Button) obj1.label, (Button) obj2.label, true);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 34577,
		"linenumber" : 508,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(j < actions.length)](i < actions.length)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 34577,
		"linenumber" : 508,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int j = 0;]int i = 0;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 34577,
		"linenumber" : 508,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "j ++;]i ++;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 34578,
		"linenumber" : 510,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "EditAction action = actions[j];]EditAction action = actions[i];",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 34609,
		"linenumber" : 596,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((newPosition != null) && (! position.equals(newPosition)))]((newPosition != null) && (! newPosition.equals(position)))",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 34674,
		"linenumber" : 446,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "isLineVisible((startLine + i))]isLineVisible(i)",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 34680,
		"linenumber" : 118,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "(! isLineVisible(line))](! buffer._isLineVisible(line, index))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 34759,
		"linenumber" : 69,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new String(text, start, (gapStart - start)).concat(new String(text, gapEnd, ((len + start) - gapEnd)));]new String(text, start, (gapStart - start)).concat(new String(text, gapEnd, ((start + len) - gapEnd)));",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 34789,
		"linenumber" : 99,
		"changeype" : "ADDING_CLASS_DERIVABILITY",
		"changeentity" : "MODIFIER",
		"changecontent" : "final",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 34794,
		"linenumber" : 1014,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "mymatch.clear((++ index));]mymatch.clear((++ anchor));",
		"parententity" : "DO_STATEMENT"
	},
	{
		"linetupleid" : 34887,
		"linenumber" : 56,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(s);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 34887,
		"linenumber" : 63,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "this(s);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 34893,
		"linenumber" : 77,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(\"\");",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 34893,
		"linenumber" : 91,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "this();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 34943,
		"linenumber" : 655,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "tabSize = (fm.charWidth(\' \') * (Integer) textArea.getBuffer().getProperty(PlainDocument.tabSizeAttribute).intValue());]tabSize = (fm.charWidth(\' \') * textArea.getBuffer().getTabSize());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 35068,
		"linenumber" : 46,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "findMatchingBracket(buffer, line, offset, 0, (buffer.getDefaultRootElement().getElementCount() - 1));]findMatchingBracket(buffer, line, offset, 0, (buffer.getLineCount() - 1));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 35094,
		"linenumber" : 127,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int i = line;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 35094,
		"linenumber" : 127,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i >= startLine)",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 35176,
		"linenumber" : 185,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "(JToggleButton) buttons.getComponent((index + 1)).setSelected(true);](JToggleButton) buttons.getComponent((index + 2)).setSelected(true);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 35289,
		"linenumber" : 68,
		"changeype" : "REMOVED_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "org.gjt.sp.jedit.search.AllBufferSet.listFiles(String)",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 35289,
		"linenumber" : 76,
		"changeype" : "ADDITIONAL_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "org.gjt.sp.jedit.search.AllBufferSet._getFiles()",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 35505,
		"linenumber" : 156,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "g.drawString(shortcut, (getWidth() - ((fm.stringWidth(shortcut) + insets.right) + insets.left)), (getFont().getSize() + (insets.top - 1)));]g.drawString(shortcut, (getWidth() - (((fm.stringWidth(shortcut) + insets.right) + insets.left) + 5)), (getFont().getSize() + (insets.top - 1)));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 35529,
		"linenumber" : 606,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(buffer.getFoldLevel(i) < initialFoldLevel)]((buffer._isLineVisible(i, index) && (buffer.getFoldLevel(i) < initialFoldLevel)) || (i == (buffer._getVirtualLineCount(index) - 1)))",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 35542,
		"linenumber" : 516,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new Point((cellRect.x + (showIcons ? 19 : 1)), (cellRect.y - 1));]new Point((cellRect.x + (showIcons ? 14 : (- 4))), cellRect.y);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 35559,
		"linenumber" : 219,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "((! buffer._isLineVisible(line, index)) && (line > 0))]((! offsetMgr.isLineVisible(line, index)) && (line > 0))",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 35570,
		"linenumber" : 333,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new ArrayIndexOutOfBoundsException(((line + \" > \") + buffer._getVirtualLineCount(index)));]new ArrayIndexOutOfBoundsException(((line + \" > \") + offsetMgr.getVirtualLineCount(index)));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 35605,
		"linenumber" : 613,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "collapsedFold = (((physicalLine < (buffer.getLineCount() - 1)) && buffer.isFoldStart(physicalLine)) && (! foldVisibilityManager.isLineVisible((physicalLine + 1))));]collapsedFold = ((((physicalLine < (buffer.getLineCount() - 1)) && buffer.isFoldStart(physicalLine)) && (! foldVisibilityManager.isLineVisible((physicalLine + 1)))) && (lineInfo.subregion == 0));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 35725,
		"linenumber" : 630,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "dim.width = (int) (getFont().getStringBounds(foo, 0, foo.length, fontRenderContext).getWidth() * 80);]dim.width = (int) getFont().getStringBounds(foo, 0, foo.length, fontRenderContext).getWidth();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 35750,
		"linenumber" : 278,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "chunks = (TextUtilities.Chunk) out.get(0);]chunks = (Chunk) out.get(0);",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 35973,
		"linenumber" : 455,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "lineInfo[line] = ((lineInfo[line] & (~ END_MASK)) | end);]lineInfo[line] = ((lineInfo[line] & (~ ((END_MASK | FOLD_LEVEL_VALID_MASK) | CONTEXT_VALID_MASK))) | end);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 36146,
		"linenumber" : 159,
		"changeype" : "ADDITIONAL_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "bsh.BSHPrimarySuffix.getIndexAux(Object,CallStack,Interpreter,SimpleNode)",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 36170,
		"linenumber" : 53,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Dimension min = find.getPreferredSize();]Dimension max = find.getPreferredSize();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 36171,
		"linenumber" : 54,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "min.width = Integer.MAX_VALUE;]max.width = Integer.MAX_VALUE;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 36172,
		"linenumber" : 55,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "find.setMaximumSize(min);]find.setMaximumSize(max);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 36183,
		"linenumber" : 50,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "method = FileSystemView.class.getMethod(\"getSystemDisplayName\", new Class[0]);]method = FileSystemView.class.getMethod(\"getSystemDisplayName\", new Class[]{java.io.File.class});",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 36187,
		"linenumber" : 309,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(offset < 0)]((chunks != null) && (offset < chunks.offset))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 36188,
		"linenumber" : 310,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new ArrayIndexOutOfBoundsException((offset + \" < 0\"));]new ArrayIndexOutOfBoundsException(((offset + \" < \") + chunks.offset));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 36321,
		"linenumber" : 189,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String messageText = jEdit.getProperty(\"print.status.message\", new String[]{new Integer((pageIndex + 1)).toString()});]String messageText = jEdit.getProperty(\"view.status.print\", new Object[]{new Integer((pageIndex + 1))});",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 36332,
		"linenumber" : 92,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "lastAtLineStart = (isSpecified ? (value == \"TRUE\") : false);]lastAtLineStart = (isSpecified ? value.equals(\"TRUE\") : false);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 36338,
		"linenumber" : 112,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "lastIgnoreCase = (isSpecified ? value.equals(\"FALSE\") : true);]lastIgnoreCase = (isSpecified ? value.equals(\"TRUE\") : false);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 36342,
		"linenumber" : 670,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "char ch = line.array[(start + i)];]char ch = line.array[i];",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 36403,
		"linenumber" : 182,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int searchLimit = (((terminateChar >= 0) && (terminateChar < line.count)) ? (line.offset + terminateChar) : lineLength);]int searchLimit = (((terminateChar >= 0) && (terminateChar < line.count)) ? (terminateChar + line.offset) : (line.count + line.offset));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 36412,
		"linenumber" : 262,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "pos = line.offset;]pos = offset;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 36442,
		"linenumber" : 338,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "context.inRule = null;",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 36460,
		"linenumber" : 37,
		"changeype" : "PARAMETER_DELETE",
		"changeentity" : "PARAMETER",
		"changecontent" : "searchChars",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 36460,
		"linenumber" : 37,
		"changeype" : "PARAMETER_DELETE",
		"changeentity" : "PARAMETER",
		"changecontent" : "sequenceLengths",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 36460,
		"linenumber" : 42,
		"changeype" : "PARAMETER_INSERT",
		"changeentity" : "PARAMETER",
		"changecontent" : "start",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 36460,
		"linenumber" : 42,
		"changeype" : "PARAMETER_INSERT",
		"changeentity" : "PARAMETER",
		"changecontent" : "end",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 36484,
		"linenumber" : 348,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((((checkRule.action & MARK_PREVIOUS) != 0) ? lastKeyword : pos) != line.offset)]((((checkRule.action & MARK_PREVIOUS) != 0) ? lastOffset : pos) != line.offset)",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 36516,
		"linenumber" : 403,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_STATEMENT",
		"changecontent" : "(checkRule.action & MAJOR_ACTIONS)](checkRule.action & ParserRule.MAJOR_ACTIONS)",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 36517,
		"linenumber" : 389,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "ParserRule.SEQ",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 36517,
		"linenumber" : 406,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "SEQ",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 36549,
		"linenumber" : 85,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int ruleAction = (TokenMarker.SEQ | (atLineStart ? TokenMarker.AT_LINE_START : 0));]int ruleAction = (SEQ | (atLineStart ? AT_LINE_START : 0));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 36551,
		"linenumber" : 113,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int ruleAction = (((TokenMarker.EOL_SPAN | (atLineStart ? TokenMarker.AT_LINE_START : 0)) | (excludeMatch ? TokenMarker.EXCLUDE_MATCH : 0)) | TokenMarker.NO_LINE_BREAK);]int ruleAction = (((EOL_SPAN | (atLineStart ? AT_LINE_START : 0)) | (excludeMatch ? EXCLUDE_MATCH : 0)) | NO_LINE_BREAK);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 36582,
		"linenumber" : 49,
		"changeype" : "PARAMETER_ORDERING_CHANGE",
		"changeentity" : "PARAMETER",
		"changecontent" : "id",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 36582,
		"linenumber" : 51,
		"changeype" : "PARAMETER_INSERT",
		"changeentity" : "PARAMETER",
		"changecontent" : "offset",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 36708,
		"linenumber" : 47,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((args.length == 3) && args[0].equals(\"auto\"))](((args.length == 2) || (args.length == 3)) && args[0].equals(\"auto\"))",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 36709,
		"linenumber" : 48,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CLASS_INSTANCE_CREATION",
		"changecontent" : "new NonInteractiveInstall(args[1], args[2]);]new NonInteractiveInstall(args[1], ((args.length == 3) ? args[2] : \"\"));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 36773,
		"linenumber" : 86,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "super.addToken(token, context, (merge && ((oldLastChunk == null) || (! (Chunk) oldLastChunk.inaccessable))))]super.addToken(token, context, (merge && (((oldLastChunk == null) || (! oldLastChunk.inaccessable)) || (oldLastChunk.str != null))))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 36843,
		"linenumber" : 302,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int ntabs = (int) ((x - pageX) / tabWidth);]int ntabs = (int) ((x + 1) / tabWidth);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 36844,
		"linenumber" : 303,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(float) (((ntabs + 1) * tabWidth) + pageX);](float) ((ntabs + 1) * tabWidth);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 36871,
		"linenumber" : 121,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "protected",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 36910,
		"linenumber" : 213,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Selection.Rect rect = new Selection.Rect(caret, caret, caretLine, caretLine);]Selection.Rect rect = new Selection.Rect(caretLine, caret, caretLine, caret);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 37054,
		"linenumber" : 414,
		"changeype" : "PARAMETER_INSERT",
		"changeentity" : "PARAMETER",
		"changecontent" : "files",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 37054,
		"linenumber" : 414,
		"changeype" : "PARAMETER_DELETE",
		"changeentity" : "PARAMETER",
		"changecontent" : "file",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 37089,
		"linenumber" : 196,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "view.getStatus().setMessageAndClear(jEdit.getProperty(\"view.status.incomplete-abbrev\", new Integer[]{new Integer(expand.posParamCount), new Integer(pp.size())}));]view.getStatus().setMessageAndClear(jEdit.getProperty(\"view.status.incomplete-abbrev\", new Integer[]{new Integer(pp.size()), new Integer(expand.posParamCount)}));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 37283,
		"linenumber" : 273,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "gfx.drawString(String.valueOf((currentPhysicalLine + 1)), (float) pageX, (float) (pageY + y));]gfx.drawString(String.valueOf((currentPhysicalLine + 1)), (float) pageX, (float) ((pageY + y) + lm.getHeight()));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 37299,
		"linenumber" : 138,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(j >= 0)",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 37299,
		"linenumber" : 138,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(j >= 0)](i >= 0)",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 37299,
		"linenumber" : 138,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int j = (bufferNode.getChildCount() - 1);]int j = (searchNode.getChildCount() - 1);",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 37348,
		"linenumber" : 143,
		"changeype" : "ATTRIBUTE_TYPE_CHANGE",
		"changeentity" : "ARRAY_TYPE",
		"changecontent" : "String",
		"parententity" : "FIELD"
	},
	{
		"linetupleid" : 37380,
		"linenumber" : 280,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "files[(fileCount ++)] = file;]occurrences[(occurCount ++)] = new Occurrence(file);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 37423,
		"linenumber" : 285,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "((j <= m) && (pattern[(i - 1)] != pattern[(j - 1)]))]((j <= m) && (pattern[(reverse ? ((pattern_end - i) + 1) : (i - 1))] != pattern[(reverse ? ((pattern_end - j) + 1) : (j - 1))]))",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 37427,
		"linenumber" : 500,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Integer[] args = {new Integer((reverse ? 1 : 0))};]Integer[] args = {new Integer((_reverse ? 1 : 0))};",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 37436,
		"linenumber" : 387,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < list.plugins.size())",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 37436,
		"linenumber" : 387,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < list.plugins.size())](j < set.plugins.size())",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 37436,
		"linenumber" : 420,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < list.pluginSets.size())",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 37436,
		"linenumber" : 420,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int i = 0;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 37436,
		"linenumber" : 420,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "i ++;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 37438,
		"linenumber" : 294,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(JOptionPane.getFrameForComponent(comp), jEdit.getProperty(\"style-editor.title\"), true);]super(GUIUtilities.getParentDialog(comp), jEdit.getProperty(\"style-editor.title\"), true);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 37526,
		"linenumber" : 168,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int i = ((lineInfo.length - firstLine) + this.firstLine);",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 37526,
		"linenumber" : 168,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < lineInfo.length)",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 37526,
		"linenumber" : 186,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < visibleLines)",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 37526,
		"linenumber" : 186,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int i = (visibleLines - firstScreenLine);",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 37551,
		"linenumber" : 248,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "iter.hasNext()]((i < visibleLines) && iter.hasNext())",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 37616,
		"linenumber" : 351,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "tokenHandler.handleToken((((context.parent.inRule.action & ParserRule.EXCLUDE_MATCH) == ParserRule.EXCLUDE_MATCH) ? context.parent.rules.getDefault() : context.parent.inRule.token), (pos - line.offset), pattern.count, context);]tokenHandler.handleToken((((context.inRule.action & ParserRule.EXCLUDE_MATCH) == ParserRule.EXCLUDE_MATCH) ? context.rules.getDefault() : context.inRule.token), (pos - line.offset), pattern.count, context);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 37625,
		"linenumber" : 49,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CLASS_INSTANCE_CREATION",
		"changecontent" : "new NonInteractiveInstall(args[1]);]new NonInteractiveInstall(args);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 37689,
		"linenumber" : 82,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CLASS_INSTANCE_CREATION",
		"changecontent" : "new AboutDialog(jEdit.getLastView());]new AboutDialog(jEdit.getActiveView());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 37695,
		"linenumber" : 40,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "private",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 37716,
		"linenumber" : 40,
		"changeype" : "UNCLASSIFIED_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "static",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 37716,
		"linenumber" : 41,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "private",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 37796,
		"linenumber" : 219,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(((((c1.style == c2.style) && (c1.id != Token.TAB)) && (c2.id != Token.TAB)) && c1.accessable) && c2.accessable);]((((((c1.style == c2.style) && (c1.id != Token.TAB)) && (c2.id != Token.TAB)) && c1.accessable) && c2.accessable) && ((c1.length + c2.length) <= MAX_CHUNK_LEN));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 37857,
		"linenumber" : 236,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "current.name;]current.factory.name;",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 37931,
		"linenumber" : 236,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "style = styles[id];",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 37931,
		"linenumber" : 236,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "style = styles[(((id == Token.WHITESPACE) || (id == Token.TAB)) ? defaultID : id)];",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 38038,
		"linenumber" : 896,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int nextLine = textArea.getDisplayManager().getNextVisibleLine(physicalLine);]int nextLine = textArea.displayManager.getNextVisibleLine(physicalLine);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 38039,
		"linenumber" : 1035,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "collapsedFold = (((physicalLine < (buffer.getLineCount() - 1)) && buffer.isFoldStart(physicalLine)) && (! textArea.getDisplayManager().isLineVisible((physicalLine + 1))));]collapsedFold = (((physicalLine < (buffer.getLineCount() - 1)) && buffer.isFoldStart(physicalLine)) && (! textArea.displayManager.isLineVisible((physicalLine + 1))));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 38197,
		"linenumber" : 85,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "g.setColor((getModel().isArmed() ? acceleratorSelectionForeground : acceleratorForeground));]g.setColor((getModel().isArmed() ? EnhancedMenuItem.acceleratorSelectionForeground : EnhancedMenuItem.acceleratorForeground));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 38297,
		"linenumber" : 223,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(EditAction[]) returnValue.toArray(new EditAction[returnValue.size()]);](String[]) returnValue.toArray(new String[returnValue.size()]);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 38371,
		"linenumber" : 704,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "lineInfo[line] = ((lineInfo[line] & (~ (END_MASK | FOLD_LEVEL_VALID_MASK))) | end);]lineInfo[line] = ((lineInfo[line] & (~ END_MASK)) | end);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 38428,
		"linenumber" : 48,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.files[i] = new Entry((VFS.DirectoryEntry) files.get(i), 0);]files[i] = new Entry((VFS.DirectoryEntry) list.get(i), 0);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 38441,
		"linenumber" : 123,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String[] dirs = {\"buffer\", \"home\", \"favorites\", \"last\"};]String[] dirs = {\"favorites\", \"home\", \"last\", \"buffer\", \"working\"};",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 38553,
		"linenumber" : 116,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Entry[] newFiles = new Entry[(files.length - (lastIndex - index))];]Entry[] newFiles = new Entry[(((files.length - lastIndex) + index) + 1)];",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 38601,
		"linenumber" : 249,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new EnhancedMenu(menuItemNames, pluginName);]new EnhancedMenu(pluginName, menuItemNames);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 38697,
		"linenumber" : 179,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "added](context != null)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 38698,
		"linenumber" : 180,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "jEdit.actionHash.put(action.getName(), this);]context.actionHash.put(action.getName(), this);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 38732,
		"linenumber" : 46,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(\"file\", ((((((READ_CAP | WRITE_CAP) | BROWSE_CAP) | DELETE_CAP) | RENAME_CAP) | MKDIR_CAP) | LOW_LATENCY_CAP));]super(\"file\", (((((READ_CAP | WRITE_CAP) | DELETE_CAP) | RENAME_CAP) | MKDIR_CAP) | LOW_LATENCY_CAP));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 38744,
		"linenumber" : 90,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "(OptionGroup) m.getRoot().save();]save(m.getRoot());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 38816,
		"linenumber" : 134,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((msg instanceof DynamicMenuUpdate) && _name.equals((DynamicMenuUpdate) msg.getMenuName()))]((msg instanceof DynamicMenuChanged) && _name.equals((DynamicMenuChanged) msg.getMenuName()))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 38859,
		"linenumber" : 124,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new EvalError(\"Use of non + operator with String LHS\", this);]new UtilEvalError(\"Use of non + operator with String LHS\");",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 39010,
		"linenumber" : 698,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "Reflect.invokeObjectMethod(interpreter, obj, methodName, args, callerInfo);]Reflect.invokeObjectMethod(obj, methodName, args, interpreter, callstack, callerInfo);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 39059,
		"linenumber" : 812,
		"changeype" : "RETURN_TYPE_CHANGE",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "EvalError]UtilEvalError",
		"parententity" : "THROW"
	},
	{
		"linetupleid" : 39097,
		"linenumber" : 71,
		"changeype" : "PARAMETER_ORDERING_CHANGE",
		"changeentity" : "PARAMETER",
		"changecontent" : "interpreter",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 39172,
		"linenumber" : 295,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(jEdit.getPlugin(plugin) instanceof EditPlugin.Broken)](plugin instanceof EditPlugin.Broken)",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 39214,
		"linenumber" : 265,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "hasScreenMenuBar = (result.equals(\"true\") ? 1 : 0);]hasScreenMenuBar = (\"true\".equals(result) ? 1 : 0);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 39335,
		"linenumber" : 92,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "rem = ring[index];]rem = ring[(count - index)];",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 39368,
		"linenumber" : 205,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.extAttrs = new String[]{EA_SIZE_OR_TYPE, EA_STATUS, EA_MODIFIED};]this.extAttrs = new String[]{EA_SIZE, EA_TYPE};",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 39460,
		"linenumber" : 727,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "tokenHandler.init(textArea.lineSegment, painter.getStyles(), painter.getFontRenderContext(), painter, out, (textArea.getDisplayManager().softWrap ? textArea.getDisplayManager().wrapMargin : 0.0f));]tokenHandler.init(textArea.lineSegment, painter.getStyles(), painter.getFontRenderContext(), painter, out, (textArea.displayManager.softWrap ? textArea.displayManager.wrapMargin : 0.0f));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 39813,
		"linenumber" : 103,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "boolean mod = (((System.currentTimeMillis() - KeyEventWorkaround.lastKeyTime) < 750) && ((KeyEventWorkaround.modifiers != 0) || (KeyEventWorkaround.modifiers != InputEvent.SHIFT_MASK)));]boolean mod = ((((System.currentTimeMillis() - KeyEventWorkaround.lastKeyTime) < 750) && (KeyEventWorkaround.modifiers != 0)) && (KeyEventWorkaround.modifiers != InputEvent.SHIFT_MASK));",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 39834,
		"linenumber" : 101,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "returnValue[0] = pos;]returnValue.start = pos;",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 39835,
		"linenumber" : 102,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "returnValue[1] = (pos + pattern.length);]returnValue.end = (pos + pattern.length);",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 39923,
		"linenumber" : 152,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "argValues[i] = NameSpace.getAssignableForm(argValues[i], method.params.argTypes[i]);",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 39924,
		"linenumber" : 156,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new EvalError(((((((StringLiteralConcatenation{\"Invalid argument: \"+\n\"`\"+\n} + method.params.argNames[i]) + \"\\\'\") + \" for method: \") + method.name) + \" : \") + e.getMessage()), callerInfo, callstack);",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 39925,
		"linenumber" : 163,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "localNameSpace.setTypedVariable(method.params.argNames[i], method.params.argTypes[i], argValues[i], false);",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 39931,
		"linenumber" : 227,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "ret = NameSpace.getAssignableForm(ret, (Class) method.returnType);",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 39936,
		"linenumber" : 140,
		"changeype" : "REMOVED_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "bsh.Interpreter.noExitOnEOF : boolean",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 39936,
		"linenumber" : 141,
		"changeype" : "ADDITIONAL_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "bsh.Interpreter.exitOnEOF : boolean",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 39986,
		"linenumber" : 59,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(parent, (parent.name + \"/BlockNameSpace\"));]super(parent, (parent.nsName + \"/BlockNameSpace\"));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 40035,
		"linenumber" : 526,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new UtilEvalError((((\"Typed variable: \" + name) + \" was previously declared with type: \") + (TypedVariable) existing.getType()));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 40052,
		"linenumber" : 69,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 40072,
		"linenumber" : 654,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new ReflectError((\"Can\\\'t find constructor: \" + clas));]new ReflectError((((\"Can\\\'t find constructor: \" + StringUtil.methodString(clas.getName(), types)) + \" in class: \") + clas.getName()));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 40089,
		"linenumber" : 97,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "returnValue.substitutions = new String[re.getNumSubs()];]returnValue.substitutions = new String[(re.getNumSubs() + 1)];",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 40234,
		"linenumber" : 338,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(int) (textArea.getHorizontalOffset() + Chunk.offsetToX(info.chunks, offset));](int) Chunk.offsetToX(info.chunks, offset);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 40463,
		"linenumber" : 129,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new EvalError((((\"(Strict Java Mode) Undeclared argument type, parameter: \" + params.argNames[i]) + \" in method: \") + name), this, null);]new EvalError((((\"(Strict Java Mode) Undeclared argument type, parameter: \" + paramsNode.getParamNames()[i]) + \" in method: \") + name), this, null);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 40510,
		"linenumber" : 219,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new UtilEvalError((((\"Argument type mismatch. \" + ((val == null) ? \"null\" : val.getClass().getName())) + \" not assignable to field \") + field.getName()));]new UtilEvalError((((\"Argument type mismatch. \" + ((val == null) ? \"null\" : type)) + \" not assignable to field \") + field.getName()));",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 40513,
		"linenumber" : 57,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(parent, (parent.nsName + \"/BlockNameSpace\"));]super(parent, (parent.getName() + \"/BlockNameSpace\"));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 40759,
		"linenumber" : 320,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new OSTask[]{};",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 40759,
		"linenumber" : 320,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new OSTask[]{new JEditLauncherOSTask(installer)};",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 40819,
		"linenumber" : 736,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "dim.width = (int) getFont().getStringBounds(foo, 0, foo.length, fontRenderContext).getWidth();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 40819,
		"linenumber" : 754,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "dim.width = (int) getStringWidth(new String(foo));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 40836,
		"linenumber" : 956,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "setExtendedState((Frame) win, extState);](Frame) win.setExtendedState(extState);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 40838,
		"linenumber" : 1115,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "jEdit.setIntegerProperty((name + \".extendedState\"), getExtendedState((Frame) win));]jEdit.setIntegerProperty((name + \".extendedState\"), (Frame) win.getExtendedState());",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 40905,
		"linenumber" : 1016,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int x = (textArea.getHorizontalOffset() + textArea.getDisplayManager().wrapMargin);]int x = (textArea.getHorizontalOffset() + textArea.wrapMargin);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 40909,
		"linenumber" : 251,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! textArea.displayManager.softWrap)](! textArea.softWrap)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 41139,
		"linenumber" : 411,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String matchAgainst = (MiscUtilities.isAbsolutePath(str) ? entry.dirEntry.path : entry.dirEntry.name);]String matchAgainst = (MiscUtilities.isAbsolutePath(str) ? entry.dirEntry.getPath() : entry.dirEntry.getName());",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 41208,
		"linenumber" : 419,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "showFilePopup(new VFS.DirectoryEntry[]{dirEntry}, parentDirectories, evt.getPoint());]showFilePopup(new VFSFile[]{dirEntry}, parentDirectories, evt.getPoint());",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 41309,
		"linenumber" : 48,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(\"file\", ((((((READ_CAP | WRITE_CAP) | DELETE_CAP) | RENAME_CAP) | MKDIR_CAP) | LOW_LATENCY_CAP) | ((OperatingSystem.isMacOS() || OperatingSystem.isDOSDerived()) ? CASE_INSENSITIVE_CAP : 0)), new String[]{EA_TYPE, EA_SIZE, EA_STATUS, EA_MODIFIED});]super(\"file\", ((((((READ_CAP | WRITE_CAP) | DELETE_CAP) | RENAME_CAP) | MKDIR_CAP) | LOW_LATENCY_CAP) | (OperatingSystem.isCaseInsensitiveFS() ? CASE_INSENSITIVE_CAP : 0)), new String[]{EA_TYPE, EA_SIZE, EA_STATUS, EA_MODIFIED});",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 41585,
		"linenumber" : 720,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Insets insets = (JComponent) parent.getBorder().getBorderInsets((JComponent) parent);]Insets insets = parent.getBorder().getBorderInsets(parent);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 41842,
		"linenumber" : 159,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "text.isValid()]((anchor + pattern_end) < text.length())",
		"parententity" : "LABELED_STATEMENT"
	},
	{
		"linetupleid" : 42128,
		"linenumber" : 251,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Set completions = new TreeSet(new MiscUtilities.StringCompare());]Set completions = new TreeSet(new StandardUtilities.StringCompare());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 42226,
		"linenumber" : 44,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "selection = new ArrayList();]selection = new ArrayList<Selection>();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 42242,
		"linenumber" : 526,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "info.length = ((Chunk) out.get((i + 1)).offset - info.offset);]info.length = (out.get((i + 1)).offset - info.offset);",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 42300,
		"linenumber" : 192,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(ExtendedAttribute) extAttrs.get((index - 1)).name;]extAttrs.get((index - 1)).name;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 42312,
		"linenumber" : 253,
		"changeype" : "ADDITIONAL_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "org.gjt.sp.jedit.ServiceManager.serviceMap : Map<Descriptor, Descriptor>",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 42312,
		"linenumber" : 258,
		"changeype" : "REMOVED_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "org.gjt.sp.jedit.ServiceManager.serviceMap : Map",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 42481,
		"linenumber" : 102,
		"changeype" : "PARENT_INTERFACE_DELETE",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "Comparator",
		"parententity" : "SUPER_INTERFACE_TYPES"
	},
	{
		"linetupleid" : 42481,
		"linenumber" : 105,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "private",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 42481,
		"linenumber" : 105,
		"changeype" : "PARENT_INTERFACE_INSERT",
		"changeentity" : "PARAMETERIZED_TYPE",
		"changecontent" : "Comparator<Mirror>",
		"parententity" : "SUPER_INTERFACE_TYPES"
	},
	{
		"linetupleid" : 42567,
		"linenumber" : 967,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "status.setMessageAndClear(jEdit.getProperty(\"view.status.bracket\", new Object[]{new Integer(line), text}));]status.setMessageAndClear(jEdit.getProperty(\"view.status.bracket\", new Object[]{line, text}));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 42691,
		"linenumber" : 377,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "jEdit.getProperty((\"view.status.\" + action), new String[]{getRegisterNameString()});]jEdit.getProperty((\"view.status.\" + action), new String[]{((registerNameString == null) ? jEdit.getProperty(\"view.status.no-registers\") : registerNameString)});",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 42719,
		"linenumber" : 578,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_STATEMENT",
		"changecontent" : "e.getKeyCode()]evt.getKeyCode()",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 42750,
		"linenumber" : 81,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "ruleSets.values().toArray(new ParserRuleSet[ruleSets.size()]);]ruleSets.values().toArray(new ParserRuleSet[0]);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 43068,
		"linenumber" : 53,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "XMLUtilities.findEntity(systemId, \"mirrors.dtd\", org.gjt.sp.jedit.options.PluginOptions.class);]XMLUtilities.findEntity(systemId, \"mirrors.dtd\", PluginOptions.class);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 43082,
		"linenumber" : 75,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < resultNodes.size())",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 43082,
		"linenumber" : 75,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int i = 0;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 43082,
		"linenumber" : 75,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "i ++;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 43082,
		"linenumber" : 77,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Iterator iter = resultNodes.iterator();",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 43082,
		"linenumber" : 77,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "iter.hasNext()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 43083,
		"linenumber" : 78,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "DefaultMutableTreeNode element = (DefaultMutableTreeNode) iter.next();",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 43083,
		"linenumber" : 78,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "DefaultMutableTreeNode element = (DefaultMutableTreeNode) iter.next();]DefaultMutableTreeNode element = resultNodes.get(i);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 43260,
		"linenumber" : 41,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "protected",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 43308,
		"linenumber" : 393,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((- 1) == new String(checkRule.upHashChars).indexOf(Character.toUpperCase(line.array[pos])))]((- 1) == Arrays.binarySearch(checkRule.upHashChars, Character.toUpperCase(line.array[pos])))",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 43336,
		"linenumber" : 527,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "(freeSize != 0)](freeSize > 0)",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 43359,
		"linenumber" : 751,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int currentMinimumRowHeight = ((rowspan - 1) * vgap);]int currentMinimumRowHeight = 0;",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 43360,
		"linenumber" : 752,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int currentPreferredRowHeight = ((rowspan - 1) * vgap);]int currentPreferredRowHeight = 0;",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 43361,
		"linenumber" : 753,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int currentMaximumRowHeight = ((rowspan - 1) * vgap);]int currentMaximumRowHeight = 0;",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 43371,
		"linenumber" : 890,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "long width:colWidths]int width:colWidths",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 43443,
		"linenumber" : 306,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "result.append(\"[EXCLUDE_MATCH=\").append(((actionHints & EXCLUDE_MATCH) != 0));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 43443,
		"linenumber" : 311,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "result.append(\"[MATCH_TYPE=\").append((matchType != 0));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 43641,
		"linenumber" : 89,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "String encoding:encodings]String encodstr:encodings",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 43642,
		"linenumber" : 90,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "boolean selected = (! getBooleanProperty((\"encoding.opt-out.\" + encoding), false));]boolean selected = (! getBooleanProperty((\"encoding.opt-out.\" + encodstr), false));",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 43683,
		"linenumber" : 354,
		"changeype" : "ADDITIONAL_CLASS",
		"changeentity" : "CLASS",
		"changecontent" : "org.gjt.sp.jedit.gui.CompleteWord.Words",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 43683,
		"linenumber" : 428,
		"changeype" : "REMOVED_CLASS",
		"changeentity" : "CLASS",
		"changecontent" : "org.gjt.sp.jedit.gui.CompleteWord.Renderer",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 43703,
		"linenumber" : 50,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(\"file\", ((((((READ_CAP | WRITE_CAP) | DELETE_CAP) | RENAME_CAP) | MKDIR_CAP) | LOW_LATENCY_CAP) | (OperatingSystem.isCaseInsensitiveFS() ? CASE_INSENSITIVE_CAP : 0)), new String[]{EA_TYPE, EA_SIZE, EA_STATUS, EA_MODIFIED});]super(\"file\", (((((((READ_CAP | WRITE_CAP) | BROWSE_CAP) | DELETE_CAP) | RENAME_CAP) | MKDIR_CAP) | LOW_LATENCY_CAP) | (OperatingSystem.isCaseInsensitiveFS() ? CASE_INSENSITIVE_CAP : 0)), new String[]{EA_TYPE, EA_SIZE, EA_STATUS, EA_MODIFIED});",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 43784,
		"linenumber" : 349,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "getFilteredBindingAt(row, (col - 1)).shortcut = (String) value;]getBindingAt(row, (col - 1)).shortcut = (String) value;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 43822,
		"linenumber" : 1087,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "PluginTableModel model = (PluginTableModel) table.getModel();]PluginTableModel model = (PluginTableModel) (FilteredTableModel) table.getModel().getDelegated();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 43901,
		"linenumber" : 1124,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "PluginTableModel model = (PluginTableModel) (FilteredTableModel) table.getModel().getDelegated();]PluginTableModel model = (PluginTableModel) table.getModel();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 44638,
		"linenumber" : 35,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "protected",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 44639,
		"linenumber" : 36,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "protected",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 44971,
		"linenumber" : 18,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new DockableWindowManager.DockableWindowConfig();]new DockableWindowManagerImpl.DockableWindowConfig();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 45066,
		"linenumber" : 54,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "ring = new UndoManager.Remove[newSize];]ring = new UndoManager.RemovedContent[newSize];",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 45067,
		"linenumber" : 57,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "UndoManager.Remove[] newRing = new UndoManager.Remove[newSize];]UndoManager.RemovedContent[] newRing = new UndoManager.RemovedContent[newSize];",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 45073,
		"linenumber" : 160,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "add((UndoManager.Remove) value);]add((UndoManager.RemovedContent) value);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 45113,
		"linenumber" : 183,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super((LOAD_PREFIX + name), new String[]{file});]super((LOAD_PREFIX + layoutName), new String[]{layoutName});",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 45114,
		"linenumber" : 184,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "jEdit.setTemporaryProperty(((LOAD_PREFIX + name) + \".label\"), (LOAD_PREFIX + name));]jEdit.setTemporaryProperty(((LOAD_PREFIX + layoutName) + \".label\"), (LOAD_PREFIX + layoutName));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 45412,
		"linenumber" : 135,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(((index >= 0) && (index < members.size())) ? members.elementAt(index) : null);](((index >= 0) && (index < members.size())) ? members.get(index) : null);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 45539,
		"linenumber" : 197,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(path, path, ((PROTOCOL + \":\") + path), type, 0, false);]super(path, path, ((PROTOCOL + \':\') + path), type, 0, false);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 45655,
		"linenumber" : 65,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "setDefaultRenderer(VFSDirectoryEntryTableModel.Entry.class, (renderer = new FileCellRenderer()));]setDefaultRenderer(Entry.class, (renderer = new FileCellRenderer()));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 45831,
		"linenumber" : 132,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "ErrorEntry entry:messages",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 45831,
		"linenumber" : 132,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "Object message:messages",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 45866,
		"linenumber" : 333,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "Class<?> msg:keySet()]Map.Entry<Class<?>, List<EBMessageHandler>> entry:entrySet()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 45939,
		"linenumber" : 54,
		"changeype" : "PARENT_INTERFACE_INSERT",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "EBComponent",
		"parententity" : "SUPER_INTERFACE_TYPES"
	},
	{
		"linetupleid" : 45939,
		"linenumber" : 55,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 46055,
		"linenumber" : 193,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "boolean emptyForNull = ((rulesForNull == null) || (rulesForNull.size() == 0));]boolean emptyForNull = ((rulesForNull == null) || rulesForNull.isEmpty());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 46056,
		"linenumber" : 194,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Character upperKey = ((null == key) ? null : Character.valueOf(Character.toUpperCase(key.charValue())));]Character upperKey = ((key == null) ? null : Character.valueOf(Character.toUpperCase(key.charValue())));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 46057,
		"linenumber" : 195,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "List<ParserRule> rulesForKey = ((null == upperKey) ? null : ruleMap.get(upperKey));]List<ParserRule> rulesForKey = ((upperKey == null) ? null : ruleMap.get(upperKey));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 46058,
		"linenumber" : 196,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "boolean emptyForKey = ((rulesForKey == null) || (rulesForKey.size() == 0));]boolean emptyForKey = ((rulesForKey == null) || rulesForKey.isEmpty());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 46169,
		"linenumber" : 86,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "Mode mode:modes.values()]Mode mode:overrideModes.values()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 46261,
		"linenumber" : 267,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "BREAK_STATEMENT",
		"changecontent" : "",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 46261,
		"linenumber" : 271,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "BREAK_STATEMENT",
		"changecontent" : "loop",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 46282,
		"linenumber" : 359,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "float newX = expander.nextTabStop(x, (offset + length));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 46468,
		"linenumber" : 335,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.upHashChar = ((null == hashChar) ? null : hashChar.toUpperCase());]this.upHashChar = ((null == hashChar) ? null : hashChar.toUpperCase().toCharArray());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 46522,
		"linenumber" : 62,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "this(name, caption, ContextType.jEdit);]this(name, caption, jEdit.getActionContext());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 46582,
		"linenumber" : 101,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "Window window:Window.getWindows()]Window window:Window.getOwnerlessWindows()",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 46593,
		"linenumber" : 117,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "((favorite = jEdit.getProperty((\"vfs.favorite.\" + i))) != null)]((favoritePath = jEdit.getProperty((\"vfs.favorite.\" + i))) != null)",
		"parententity" : "SYNCHRONIZED_STATEMENT"
	},
	{
		"linetupleid" : 46941,
		"linenumber" : 656,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "(start < end)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 46941,
		"linenumber" : 658,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "((max != (- 1)) && (start < end))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 46965,
		"linenumber" : 298,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSERT_STATEMENT",
		"changecontent" : "(offsetInMargin == (- 1))](offsetInMargin != (- 1))",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 47057,
		"linenumber" : 110,
		"changeype" : "ADDING_ATTRIBUTE_MODIFIABILITY",
		"changeentity" : "MODIFIER",
		"changecontent" : "final",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 47057,
		"linenumber" : 142,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "private",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 47062,
		"linenumber" : 164,
		"changeype" : "REMOVED_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "org.gjt.sp.util.ThreadUtilities.MyRunnable.done : boolean",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 47062,
		"linenumber" : 228,
		"changeype" : "ADDITIONAL_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "org.gjt.sp.util.ThreadUtilities.MyRunnable.done : CountDownLatch",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 47077,
		"linenumber" : 110,
		"changeype" : "REMOVING_ATTRIBUTE_MODIFIABILITY",
		"changeentity" : "MODIFIER",
		"changecontent" : "final",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 47252,
		"linenumber" : 265,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! checkSelection(source, selectionSourceStart, (selectionSourceEnd - 1)))](! checkSelection(source, selectionSourceStart, selectionSourceEnd))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 47740,
		"linenumber" : 391,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 47757,
		"linenumber" : 462,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! method.isConstructor())",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 47885,
		"linenumber" : 35,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! name.toUpperCase().endsWith(\".CLASS\"))](! Util.isClassFileName(name))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 47886,
		"linenumber" : 36,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new IllegalArgumentException(\"class file name must end with .class\");]new IllegalArgumentException(Util.bind(\"element.invalidClassFileName\"));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 47911,
		"linenumber" : 111,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "simpleName.endsWith(\".java\")]Util.isJavaFileName(simpleName)",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 48348,
		"linenumber" : 20,
		"changeype" : "ADDITIONAL_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "org.eclipse.jdt.internal.core.search.matching.MethodReferencePattern.allSuperDeclaringTypeNames : char[][][]",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 48348,
		"linenumber" : 20,
		"changeype" : "REMOVED_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "org.eclipse.jdt.internal.core.search.matching.MethodReferencePattern.declaringTypes : ReferenceBinding[]",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 48377,
		"linenumber" : 37,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new IllegalArgumentException(Util.bind(\"element.invalidUnitName\"));]new IllegalArgumentException(Util.bind(\"convention.unit.notJavaName\"));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 48401,
		"linenumber" : 253,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "buf.append(fOldTSEntry.getType().getName()).append(\")\").toString();]buf.append(fOldTSEntry.getType().getName()).append(\')\').toString();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 48474,
		"linenumber" : 165,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "buffer.append(\"=\").append(fInitializer).append(fDocument, (fNameRange[1] + 1), (fSourceRange[1] - fNameRange[1]));]buffer.append(\'=\').append(fInitializer).append(fDocument, (fNameRange[1] + 1), (fSourceRange[1] - fNameRange[1]));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 48547,
		"linenumber" : 56,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "SearchPattern.TRUSTED_MATCH]SearchPattern.ACCURATE_MATCH",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 48549,
		"linenumber" : 140,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((pkg != null) && (this.matchingNodes.get(pkg) == pkg))]((pkg != null) && ((level = (Integer) this.matchingNodes.remove(pkg)) != null))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 48562,
		"linenumber" : 101,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! this.matchesName(this.selector, method.selector))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 48572,
		"linenumber" : 98,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "protected",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 48572,
		"linenumber" : 102,
		"changeype" : "PARAMETER_INSERT",
		"changeentity" : "PARAMETER",
		"changecontent" : "method",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 48573,
		"linenumber" : 91,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(((! messageSend.binding.isStatic()) && (! messageSend.isSuperAccess())) && (! messageSend.binding.isPrivate()));](((! method.isStatic()) && (! messageSend.isSuperAccess())) && (! method.isPrivate()));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 48588,
		"linenumber" : 114,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(CompilationUnit) this.currentOpenable.getImport(new String(importName));](CompilationUnit) this.getCurrentOpenable().getImport(new String(importName));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 48589,
		"linenumber" : 163,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "CompilationUnit unit = (CompilationUnit) this.currentOpenable;]CompilationUnit unit = (CompilationUnit) this.getCurrentOpenable();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 48593,
		"linenumber" : 231,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "JavaProject javaProject = (JavaProject) this.currentOpenable.getJavaProject();]JavaProject javaProject = (JavaProject) openable.getJavaProject();",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 48594,
		"linenumber" : 232,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.currentResource = this.currentOpenable.getUnderlyingResource();]resource = openable.getUnderlyingResource();",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 48595,
		"linenumber" : 233,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(this.currentResource == null)](resource == null)",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 48596,
		"linenumber" : 234,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.currentResource = javaProject.getProject();]resource = javaProject.getProject();",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 48611,
		"linenumber" : 41,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "buildCompilationUnit(new ISourceType[]{sourceType}, needFieldsAndMethods, needMemberTypes, problemReporter, compilationResult);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 48611,
		"linenumber" : 41,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "buildCompilationUnit(sourceType, needFieldsAndMethods, true, problemReporter, compilationResult);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 48612,
		"linenumber" : 56,
		"changeype" : "PARAMETER_INSERT",
		"changeentity" : "PARAMETER",
		"changecontent" : "sourceTypes",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 48614,
		"linenumber" : 71,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "typeRequestor.accept(answer.getSourceType(), computePackageFrom(compoundName));]typeRequestor.accept(answer.getSourceTypes(), computePackageFrom(compoundName));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 48630,
		"linenumber" : 301,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "CompilationUnitDeclaration unit = SourceTypeConverter.buildCompilationUnit(topLevelType, false, true, lookupEnvironment.problemReporter, result);]CompilationUnitDeclaration unit = SourceTypeConverter.buildCompilationUnit(new ISourceType[]{topLevelType}, false, true, lookupEnvironment.problemReporter, result);",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 48641,
		"linenumber" : 362,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int constantPoolIndex = reader.u2At((constantPoolOffsets[index] + 3));]int nameAndTypeIndex = reader.u2At((constantPoolOffsets[index] + 3));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 48642,
		"linenumber" : 363,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int utf8Offset = constantPoolOffsets[reader.u2At((constantPoolOffsets[constantPoolIndex] + 1))];]int utf8Offset = constantPoolOffsets[reader.u2At((constantPoolOffsets[nameAndTypeIndex] + 1))];",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 48654,
		"linenumber" : 13,
		"changeype" : "ADDITIONAL_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "org.eclipse.jdt.internal.compiler.parser.TerminalSymbols.TokenNameassert : int",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 48678,
		"linenumber" : 98,
		"changeype" : "ADDITIONAL_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "org.eclipse.jdt.internal.core.SourceMapper.importsTable : Hashtable",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 48678,
		"linenumber" : 98,
		"changeype" : "REMOVED_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "org.eclipse.jdt.internal.core.SourceMapper.imports : char[][]",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 48679,
		"linenumber" : 102,
		"changeype" : "ATTRIBUTE_RENAMING",
		"changeentity" : "FIELD",
		"changecontent" : "org.eclipse.jdt.internal.core.SourceMapper.importsCounter : int",
		"parententity" : "FIELD"
	},
	{
		"linetupleid" : 48679,
		"linenumber" : 102,
		"changeype" : "ATTRIBUTE_TYPE_CHANGE",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "int",
		"parententity" : "FIELD"
	},
	{
		"linetupleid" : 48680,
		"linenumber" : 132,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(this.imports.length == this.importsCounter)](imports.length == importsCounter)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 48681,
		"linenumber" : 133,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "System.arraycopy(this.imports, 0, (this.imports = new char[(this.importsCounter * 2)][]), 0, this.importsCounter);]System.arraycopy(imports, 0, (imports = new char[(importsCounter * 2)][]), 0, importsCounter);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 48685,
		"linenumber" : 87,
		"changeype" : "ADDITIONAL_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "org.eclipse.jdt.internal.compiler.impl.CompilerOptions.setAccessEmulationSeverity(int)",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 48685,
		"linenumber" : 181,
		"changeype" : "REMOVED_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "org.eclipse.jdt.internal.compiler.impl.CompilerOptions.handleAccessEmulationAsWarning(boolean)",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 48691,
		"linenumber" : 87,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "Error",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 48691,
		"linenumber" : 91,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "ERROR",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 48883,
		"linenumber" : 368,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "CompilationUnitDeclaration parsedUnit = SourceTypeConverter.buildCompilationUnit(new ISourceType[]{outerType}, false, true, this.parser.problemReporter(), result);]CompilationUnitDeclaration parsedUnit = SourceTypeConverter.buildCompilationUnit(outerType, false, this.parser.problemReporter(), result);",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 48910,
		"linenumber" : 247,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "units[(++ count)] = SourceTypeConverter.buildCompilationUnit(new ISourceType[]{topLevelType}, false, true, lookupEnvironment.problemReporter, result);]units[(++ count)] = SourceTypeConverter.buildCompilationUnit(topLevelType, false, true, lookupEnvironment.problemReporter, result);",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 48959,
		"linenumber" : 1051,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! JavaCore.getOptionPossibleValues(JavaCore.OPTION_ComputeBuildOrder)[0].equals(JavaCore.getOptionValue(JavaCore.OPTION_ComputeBuildOrder)))](! JavaCore.COMPUTE.equals(JavaCore.getOptions().get(JavaCore.CORE_JAVA_BUILD_ORDER)))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 48992,
		"linenumber" : 97,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 49136,
		"linenumber" : 1143,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! JavaCore.COMPUTE.equals(JavaCore.getOptions().get(JavaCore.CORE_JAVA_BUILD_ORDER)))](! JavaCore.getOptionPossibleValues(JavaCore.OPTION_ComputeBuildOrder)[0].equals(JavaCore.getOptionValue(JavaCore.OPTION_ComputeBuildOrder)))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 49193,
		"linenumber" : 378,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "lineStart = (i + 1);]lineStart = (i + 2);",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 49194,
		"linenumber" : 317,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "pushOnExpressionStack(new CodeSnippetThisReference(intStack[(intPtr --)], endPosition, evaluationContext, false));]pushOnExpressionStack(new CodeSnippetThisReference(intStack[(intPtr --)], endPosition, this.evaluationContext, false));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 49279,
		"linenumber" : 333,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "pushOnExpressionStack(new CodeSnippetThisReference(intStack[(intPtr --)], endPosition, this.evaluationContext, false));]pushOnExpressionStack(new CodeSnippetThisReference(intStack[(intPtr --)], endPosition, evaluationContext, false));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 50203,
		"linenumber" : 346,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "IPackageFragment pkg = (IPackageFragment) pkgs[k];",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 50203,
		"linenumber" : 346,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "IJavaElement pkg = pkgs[k];",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 50204,
		"linenumber" : 347,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "pkgPattern.matchesName(pkgPattern.pkgName, pkg.getElementName().toCharArray())]((pkg.getChildren().length > 0) && pkgPattern.matchesName(pkgPattern.pkgName, pkg.getElementName().toCharArray()))",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 50205,
		"linenumber" : 74,
		"changeype" : "PARAMETER_TYPE_CHANGE",
		"changeentity" : "ARRAY_TYPE",
		"changecontent" : "settings: ConfigurableOption",
		"parententity" : "PARAMETER"
	},
	{
		"linetupleid" : 50217,
		"linenumber" : 13,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(null, name, (int) (posNom >>> 32), (int) (posNom & 0xFFFFFFFFL));]super(null, name, (int) (posNom >>> 32), (int) posNom);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 50218,
		"linenumber" : 90,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(((((operation.right instanceof SingleNameReference) && ((operator == PLUS) || (operator == MULTIPLY))) && ((variableReference = (SingleNameReference) operation.right).binding == binding)) && (operation.left.constant != NotAConstant)) && ((operation.implicitConversion >> 4) != T_String))](((((operation.right instanceof SingleNameReference) && ((operator == PLUS) || (operator == MULTIPLY))) && ((variableReference = (SingleNameReference) operation.right).binding == binding)) && (operation.left.constant != NotAConstant)) && ((operation.left.implicitConversion >> 4) != T_String))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 50259,
		"linenumber" : 19,
		"changeype" : "PARAMETER_INSERT",
		"changeentity" : "PARAMETER",
		"changecontent" : "sourceEnd",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 50259,
		"linenumber" : 19,
		"changeype" : "PARAMETER_INSERT",
		"changeentity" : "PARAMETER",
		"changecontent" : "sourceStart",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 50259,
		"linenumber" : 19,
		"changeype" : "PARAMETER_DELETE",
		"changeentity" : "PARAMETER",
		"changecontent" : "startPosition",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 50260,
		"linenumber" : 20,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.sourceStart = startPosition;]this.sourceStart = sourceStart;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 50261,
		"linenumber" : 21,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.sourceEnd = sourceEnd;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 50261,
		"linenumber" : 21,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.sourceEnd = (startPosition + 6);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 50276,
		"linenumber" : 37,
		"changeype" : "ADDITIONAL_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "org.eclipse.jdt.internal.compiler.ast.Expression.isConstantValueRepresentable(Constant,int,int)",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 50276,
		"linenumber" : 37,
		"changeype" : "REMOVED_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "org.eclipse.jdt.internal.compiler.ast.Expression.convertToTypeFromTypeValue(int,int,Constant)",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 50371,
		"linenumber" : 309,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "convertToTypeFromTypeValue(targetType.id, constantType.id, constant);]isConstantValueRepresentable(constant, constantType.id, targetType.id);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 50419,
		"linenumber" : 1373,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "table[((T_String << 4) + T_Object)] = ((((String2String << 12) + (T_Object << 8)) + (T_Object << 4)) + T_String);]table[((T_String << 4) + T_Object)] = (((String2String << 12) + (Object2Object << 4)) + T_String);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 50420,
		"linenumber" : 1386,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "table[((T_Object << 4) + T_String)] = ((((T_Object << 16) + (T_Object << 12)) + (String2String << 4)) + T_String);]table[((T_Object << 4) + T_String)] = (((Object2Object << 12) + (String2String << 4)) + T_String);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 50445,
		"linenumber" : 147,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "ReferenceBinding receiverType = ((binding == null) ? null : ((! isVirtualInvoke(method, messageSend)) ? method.declaringClass : (ReferenceBinding) messageSend.receiverType));]ReferenceBinding receiverType = ((binding == null) ? null : (((! isVirtualInvoke(method, messageSend)) || (messageSend.receiverType instanceof ArrayBinding)) ? method.declaringClass : (ReferenceBinding) messageSend.receiverType));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 50446,
		"linenumber" : 151,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "this.isVirtualInvoke(method, messageSend)](this.isVirtualInvoke(method, messageSend) && (! (messageSend.receiverType instanceof ArrayBinding)))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 50457,
		"linenumber" : 483,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "source = BufferManager.bytesToChar(bytes);]source = Util.bytesToChar(bytes);",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 50458,
		"linenumber" : 484,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CATCH_CLAUSE",
		"changecontent" : "JavaModelException]IOException",
		"parententity" : "CATCH_CLAUSES"
	},
	{
		"linetupleid" : 50468,
		"linenumber" : 25,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "Util.getFileByteContent(file);]org.eclipse.jdt.internal.compiler.util.Util.getFileByteContent(file);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 50472,
		"linenumber" : 64,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.contents = Util.getFileByteContent(resource.getLocation().toFile());]this.contents = org.eclipse.jdt.internal.compiler.util.Util.getFileByteContent(resource.getLocation().toFile());",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 50480,
		"linenumber" : 56,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "constantPoolOffsets[i] = readOffset;]this.constantPoolOffsets[i] = readOffset;",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 50496,
		"linenumber" : 124,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(interfacesCount != 0)](this.interfacesCount != 0)",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 50497,
		"linenumber" : 125,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "interfaceNames = new char[interfacesCount][];]this.interfaceNames = new char[this.interfacesCount][];",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 50498,
		"linenumber" : 126,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < interfacesCount)](i < this.interfacesCount)",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 50499,
		"linenumber" : 127,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "interfaceNames[i] = getConstantClassNameAt(u2At(readOffset));]this.interfaceNames[i] = getConstantClassNameAt(u2At(readOffset));",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 50502,
		"linenumber" : 136,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "fields = new FieldInfo[fieldsCount];]this.fields = new FieldInfo[this.fieldsCount];",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 50503,
		"linenumber" : 137,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < fieldsCount)](i < this.fieldsCount)",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 50504,
		"linenumber" : 138,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "field = new FieldInfo(reference, constantPoolOffsets, readOffset);]field = new FieldInfo(reference, this.constantPoolOffsets, readOffset);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 50505,
		"linenumber" : 139,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "fields[i] = field;]this.fields[i] = field;",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 50512,
		"linenumber" : 161,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int utf8Offset = constantPoolOffsets[u2At(readOffset)];]int utf8Offset = this.constantPoolOffsets[u2At(readOffset)];",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 50515,
		"linenumber" : 172,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "innerInfos[j] = new InnerClassInfo(reference, constantPoolOffsets, (innerOffset + 2));]this.innerInfos[j] = new InnerClassInfo(reference, this.constantPoolOffsets, (innerOffset + 2));",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 50516,
		"linenumber" : 174,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(classNameIndex == innerInfos[j].innerClassNameIndex)](this.classNameIndex == this.innerInfos[j].innerClassNameIndex)",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 50517,
		"linenumber" : 175,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "innerInfo = innerInfos[j];]this.innerInfo = this.innerInfos[j];",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 50518,
		"linenumber" : 176,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "innerInfoIndex = j;]this.innerInfoIndex = j;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 50534,
		"linenumber" : 302,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int length = innerInfos.length;]int length = this.innerInfos.length;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 50535,
		"linenumber" : 303,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int startingIndex = ((innerInfo != null) ? (innerInfoIndex + 1) : 0);]int startingIndex = ((this.innerInfo != null) ? (this.innerInfoIndex + 1) : 0);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 50536,
		"linenumber" : 305,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "IBinaryNestedType[] memberTypes = new IBinaryNestedType[(length - innerInfoIndex)];]IBinaryNestedType[] memberTypes = new IBinaryNestedType[(length - this.innerInfoIndex)];",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 50538,
		"linenumber" : 311,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((outerClassNameIdx != 0) && (outerClassNameIdx == classNameIndex))]((outerClassNameIdx != 0) && (outerClassNameIdx == this.classNameIndex))",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 50545,
		"linenumber" : 376,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(((innerInfo != null) && (innerInfo.getEnclosingTypeName() == null)) && (innerInfo.getSourceName() == null));](((this.innerInfo != null) && (this.innerInfo.getEnclosingTypeName() == null)) && (this.innerInfo.getSourceName() == null));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 50555,
		"linenumber" : 147,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "ReferenceBinding receiverType = ((binding == null) ? null : (((! isVirtualInvoke(method, messageSend)) || (messageSend.receiverType instanceof ArrayBinding)) ? method.declaringClass : (ReferenceBinding) messageSend.receiverType));]ReferenceBinding receiverType = ((binding == null) ? null : method.declaringClass);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 50577,
		"linenumber" : 81,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "ExceptionHandlingFlowContext handlingContext = new ExceptionHandlingFlowContext(insideSubContext, tryBlock, caughtExceptionTypes, scope, flowInfo.unconditionalInits());]ExceptionHandlingFlowContext handlingContext = new ExceptionHandlingFlowContext(((insideSubContext == null) ? flowContext : insideSubContext), tryBlock, caughtExceptionTypes, scope, flowInfo.unconditionalInits());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 50584,
		"linenumber" : 53,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "isReached = new int[cacheSize];]this.isReached = new int[cacheSize];",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 50585,
		"linenumber" : 54,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "isNeeded = new int[cacheSize];]this.isNeeded = new int[cacheSize];",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 50586,
		"linenumber" : 55,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "initsOnExceptions = new UnconditionalFlowInfo[count];]this.initsOnExceptions = new UnconditionalFlowInfo[count];",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 50588,
		"linenumber" : 57,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "indexes.put(handledExceptions[i], i);]this.indexes.put(handledExceptions[i], i);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 50593,
		"linenumber" : 63,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "initsOnExceptions[i] = flowInfo.copy().unconditionalInits();]this.initsOnExceptions[i] = flowInfo.copy().unconditionalInits();",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 50594,
		"linenumber" : 65,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "initsOnExceptions[i] = FlowInfo.DeadEnd;]this.initsOnExceptions[i] = FlowInfo.DeadEnd;",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 50608,
		"linenumber" : 45,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "FlowInfo mergedInfo = left.analyseCode(currentScope, flowContext, flowInfo).unconditionalInits();",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 50608,
		"linenumber" : 45,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "FlowInfo mergedInfo = left.analyseCode(currentScope, flowContext, flowInfo).unconditionalInits();]FlowInfo mergedInfo = left.analyseCode(currentScope, flowContext, flowInfo);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 50662,
		"linenumber" : 239,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_STATEMENT",
		"changecontent" : "(qNameRef.bits & Statement.RestrictiveFlagMASK)](qNameRef.bits & AstNode.RestrictiveFlagMASK)",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 50668,
		"linenumber" : 271,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "localDeclarationVisitor.enclosingElement = ((parent instanceof IType) ? this.locator.createFieldHandle(field, (IType) parent) : parent);]localDeclarationVisitor.enclosingElement = ((parent instanceof IType) ? (field.isField() ? (IJavaElement) this.locator.createFieldHandle(field, (IType) parent) : (IJavaElement) this.locator.createInitializerHandle(type, field, (IType) parent)) : parent);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 50677,
		"linenumber" : 1021,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "this.matchesType(simpleNamePattern, qualificationPattern, ((type.qualifiedPackageName().length == 0) ? type.qualifiedSourceName() : CharOperation.concat(type.qualifiedPackageName(), type.qualifiedSourceName(), \'.\')))]this.matchesType(simpleNamePattern, qualificationPattern, ((qualifiedPackageName.length == 0) ? qualifiedSourceName : CharOperation.concat(qualifiedPackageName, qualifiedSourceName, \'.\')))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 50694,
		"linenumber" : 1312,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "optimizedBooleanConstant = Constant.fromValue((! cst.booleanValue()));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 50694,
		"linenumber" : 1312,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "optimizedBooleanConstant = Constant.fromValue((! cst.booleanValue()));]optimizedBooleanConstant = cst;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 50709,
		"linenumber" : 634,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "searchPattern = new OrPattern(new TypeDeclarationPattern(qualification, enclosingTypeNames, simpleName, TYPE_SUFFIX, EXACT_MATCH, CASE_SENSITIVE), new TypeReferencePattern(qualification, simpleName, EXACT_MATCH, CASE_SENSITIVE));]searchPattern = new OrPattern(new TypeDeclarationPattern(qualification, enclosingTypeNames, simpleName, TYPE_SUFFIX, EXACT_MATCH, CASE_SENSITIVE), new TypeReferencePattern(fullQualification, simpleName, EXACT_MATCH, CASE_SENSITIVE));",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 50712,
		"linenumber" : 312,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "level = this.matchLevelAsSubtype(receiverBinding, this.declaringSimpleName, this.declaringQualification);]level = this.matchLevelForType(this.declaringSimpleName, this.declaringQualification, receiverBinding);",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 50715,
		"linenumber" : 36,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((binding == null) || (! binding.isValidBinding()))]((binding == null) || (! (binding.isValidBinding() || (binding.problemId() == ProblemReasons.NotVisible))))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 50763,
		"linenumber" : 21,
		"changeype" : "PARAMETER_INSERT",
		"changeentity" : "PARAMETER",
		"changecontent" : "indexedContainer",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 50763,
		"linenumber" : 21,
		"changeype" : "PARAMETER_DELETE",
		"changeentity" : "PARAMETER",
		"changecontent" : "project",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 50797,
		"linenumber" : 1342,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "BREAK_STATEMENT",
		"changecontent" : "done]done1",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 50858,
		"linenumber" : 634,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "((i < tokenNumber) && (! CharOperation.equals(currentTokenSource, qualifiedName[(i ++)])))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 50889,
		"linenumber" : 657,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "((i < tokenNumber) && (! (equals = this.pattern.matchesName(qualifiedName[(i ++)], currentTokenSource))))]((i < tokenNumber) && (! (equals = CharOperation.equals(qualifiedName[(i ++)], currentTokenSource))))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 50893,
		"linenumber" : 20,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(size == maxSize)](this.size == this.maxSize)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 50894,
		"linenumber" : 21,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "System.arraycopy(elements, 0, (elements = new Object[(maxSize *= 2)]), 0, size);]System.arraycopy(this.elements, 0, (this.elements = new Object[(this.maxSize *= 2)]), 0, this.size);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 50895,
		"linenumber" : 22,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "elements[(size ++)] = newElement;]this.elements[(this.size ++)] = newElement;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 50896,
		"linenumber" : 25,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((size + newElements.length) >= maxSize)]((this.size + newElements.length) >= this.maxSize)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 50897,
		"linenumber" : 26,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "maxSize = (size + newElements.length);]maxSize = (this.size + newElements.length);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 50898,
		"linenumber" : 27,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "System.arraycopy(elements, 0, (elements = new Object[maxSize]), 0, size);]System.arraycopy(this.elements, 0, (this.elements = new Object[this.maxSize]), 0, this.size);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 50899,
		"linenumber" : 33,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int i = size;]int i = this.size;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 50900,
		"linenumber" : 34,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(element == elements[i])]element.equals(this.elements[i])",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 50901,
		"linenumber" : 39,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "elements[index];]this.elements[index];",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 50907,
		"linenumber" : 52,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "System.arraycopy(elements, (i + 1), elements, i, ((-- size) - i));]System.arraycopy(this.elements, (i + 1), this.elements, i, ((-- this.size) - i));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 50908,
		"linenumber" : 53,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "elements[size] = null;]this.elements[this.size] = null;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 50928,
		"linenumber" : 841,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "CompilerOptions options = new CompilerOptions(null);]CompilerOptions options = new CompilerOptions(JavaCore.getOptions());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 50933,
		"linenumber" : 296,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "((currentType != targetEnclosingType) && (! targetEnclosingType.isSuperclassOf(currentType)))]((currentType.isNestedType() && (currentType != targetEnclosingType)) && (! targetEnclosingType.isSuperclassOf(currentType)))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 50939,
		"linenumber" : 51,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "classFile.exists()]mainTypeClassFile.exists()",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 50940,
		"linenumber" : 52,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.openable = (Openable) classFile;]this.openable = (Openable) mainTypeClassFile;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 50948,
		"linenumber" : 353,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "BlockScope finallyScope = new BlockScope(tryBlock.scope);]BlockScope finallyScope = new BlockScope(scope);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 50949,
		"linenumber" : 32,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 50950,
		"linenumber" : 33,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 50988,
		"linenumber" : 85,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.parser = new Parser(problemReporter, this.options.parseLiteralExpressionsAsConstants, this.options.getAssertMode());]this.parser = new Parser(problemReporter, this.options.parseLiteralExpressionsAsConstants, this.options.assertMode);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 50991,
		"linenumber" : 269,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Parser parser = new Parser(lookupEnvironment.problemReporter, false, options.getAssertMode());]Parser parser = new Parser(lookupEnvironment.problemReporter, false, options.assertMode);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 51028,
		"linenumber" : 324,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "IClasspathEntry[] entries = project.getExpandedClasspath(true);]IClasspathEntry[] entries = (JavaProject) project.getExpandedClasspath(true);",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 51030,
		"linenumber" : 1100,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "affectedProjects.put(projects[i], projects[i].getExpandedClasspath(true));]affectedProjects.put(projects[i], (JavaProject) projects[i].getExpandedClasspath(true));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 51048,
		"linenumber" : 306,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "CreateTypeHierarchyOperation op = new CreateTypeHierarchyOperation(this, SearchEngine.createJavaSearchScope(new IResource[]{project.getProject()}), true);]CreateTypeHierarchyOperation op = new CreateTypeHierarchyOperation(this, SearchEngine.createJavaSearchScope(new IJavaElement[]{project}), true);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 51063,
		"linenumber" : 78,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "this.addEnclosingProjectOrJar(project.getProject().getFullPath());]this.addEnclosingProjectOrJar(project.getFullPath());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 51064,
		"linenumber" : 80,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "IWorkspaceRoot root = project.getUnderlyingResource().getWorkspace().getRoot();]IWorkspaceRoot root = project.getWorkspace().getRoot();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 51065,
		"linenumber" : 81,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "IClasspathEntry[] entries = project.getResolvedClasspath(true);]IClasspathEntry[] entries = javaProject.getResolvedClasspath(true);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 51066,
		"linenumber" : 82,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "IJavaModel model = project.getJavaModel();]IJavaModel model = javaProject.getJavaModel();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 51079,
		"linenumber" : 781,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "InnerClassInfo[] currentMemberTypes = (InnerClassInfo[]) this.getMemberTypes();]IBinaryNestedType[] currentMemberTypes = (IBinaryNestedType[]) this.getMemberTypes();",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 51080,
		"linenumber" : 782,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "InnerClassInfo[] otherMemberTypes = (InnerClassInfo[]) newClassFile.getMemberTypes();]IBinaryNestedType[] otherMemberTypes = (IBinaryNestedType[]) newClassFile.getMemberTypes();",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 51103,
		"linenumber" : 141,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "boolean status = FAILED;]boolean status = IJob.FAILED;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 51106,
		"linenumber" : 145,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "ForceImmediate]IJob.ForceImmediate",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 51119,
		"linenumber" : 156,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "CancelIfNotReady]IJob.CancelIfNotReady",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 51140,
		"linenumber" : 56,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(problemReporter, false, assertMode);]super(problemReporter, true, assertMode);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 51163,
		"linenumber" : 220,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "ExplicitConstructorCall constructorCall = new SelectionOnExplicitConstructorCall(accessMode);]final ExplicitConstructorCall constructorCall = new SelectionOnExplicitConstructorCall(accessMode);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 51180,
		"linenumber" : 14,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 51181,
		"linenumber" : 15,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "private",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 51182,
		"linenumber" : 16,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "private",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 51184,
		"linenumber" : 80,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int index = ((int) hash % length);]int index = (hash % length);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 51217,
		"linenumber" : 38,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "index = ((index + 1) % elementTable.length);]index = ((index + 1) % length);",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 51281,
		"linenumber" : 122,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "IProject[] projects = this.workspaceRoot.getProjects();]IProject[] projects = this.workspace.getRoot().getProjects();",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 51287,
		"linenumber" : 1090,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "System.out.println((\"CREATED TYPE HIERARCHY in \" + Thread.currentThread()));]System.out.println(((((\"CREATED TYPE HIERARCHY in \" + (System.currentTimeMillis() - start)) + \"ms [\") + Thread.currentThread()) + \"]\"));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 51328,
		"linenumber" : 354,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int index = (CharOperation.lastIndexOf(\'/\', fileId) + 1);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 51329,
		"linenumber" : 355,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "char[] dirName = CharOperation.subarray(fileId, 0, index);]char[] dirName = CharOperation.subarray(fileId, 0, (CharOperation.lastIndexOf(\'/\', fileId) + 1));",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 51330,
		"linenumber" : 356,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "IPath path = new Path(new String(CharOperation.concat(dirName, previous)));]String filename = new String(CharOperation.concat(dirName, previous));",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 51330,
		"linenumber" : 366,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "IPath path = new Path(filename).addFileExtension(JavaBuilder.ClassExtension);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 51342,
		"linenumber" : 809,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "IFile file = (IFile) delta.getResource();]IFile file = (IFile) element.getUnderlyingResource();",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 51344,
		"linenumber" : 256,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.classpath = new ClasspathLocation[entries.length];]this.classpath = new ClasspathLocation[max];",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 51348,
		"linenumber" : 277,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "classpath[i] = ClasspathLocation.forRequiredProject(prereqOutputFolder.getLocation().toString());]classpath[(cpCount ++)] = ClasspathLocation.forRequiredProject(prereqOutputFolder.getLocation().toOSString());",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 51363,
		"linenumber" : 271,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! (resource instanceof IContainer))",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 51363,
		"linenumber" : 271,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "CONTINUE_STATEMENT",
		"changecontent" : "nextEntry",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 51363,
		"linenumber" : 273,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "CONTINUE_STATEMENT",
		"changecontent" : "",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 51363,
		"linenumber" : 273,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! (target instanceof IContainer))",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 51363,
		"linenumber" : 273,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! (target instanceof IContainer))](target instanceof IResource)",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 51364,
		"linenumber" : 271,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! (resource instanceof IContainer))",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 51364,
		"linenumber" : 271,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "CONTINUE_STATEMENT",
		"changecontent" : "nextEntry",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 51364,
		"linenumber" : 273,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "CONTINUE_STATEMENT",
		"changecontent" : "",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 51364,
		"linenumber" : 273,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! (target instanceof IContainer))",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 51364,
		"linenumber" : 273,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! (target instanceof IContainer))](target instanceof IResource)",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 51365,
		"linenumber" : 274,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "sourceFolders[srcCount] = (IContainer) target;]sourceFolders[(srcCount ++)] = (IContainer) resource;",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 51366,
		"linenumber" : 275,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "classpath[(cpCount ++)] = ClasspathLocation.forSourceFolder(sourceFolders[(srcCount ++)].getLocation().toOSString(), outputFolder.getLocation().toOSString());]classpath[(cpCount ++)] = ClasspathLocation.forSourceFolder(resource.getLocation().toString(), outputFolder.getLocation().toString());",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 51367,
		"linenumber" : 276,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "BREAK_STATEMENT",
		"changecontent" : "nextEntry",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 51367,
		"linenumber" : 278,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "BREAK_STATEMENT",
		"changecontent" : "",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 51369,
		"linenumber" : 279,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! (resource instanceof IProject))",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 51369,
		"linenumber" : 279,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "CONTINUE_STATEMENT",
		"changecontent" : "nextEntry",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 51369,
		"linenumber" : 282,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "CONTINUE_STATEMENT",
		"changecontent" : "",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 51369,
		"linenumber" : 282,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! (target instanceof IProject))",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 51370,
		"linenumber" : 279,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! (resource instanceof IProject))",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 51370,
		"linenumber" : 279,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "CONTINUE_STATEMENT",
		"changecontent" : "nextEntry",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 51370,
		"linenumber" : 282,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "CONTINUE_STATEMENT",
		"changecontent" : "",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 51370,
		"linenumber" : 282,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! (target instanceof IProject))",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 51371,
		"linenumber" : 283,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "IProject prereqProject = (IProject) target;]IProject prereqProject = (IProject) resource;",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 51378,
		"linenumber" : 288,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "CONTINUE_STATEMENT",
		"changecontent" : "nextEntry",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 51378,
		"linenumber" : 291,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "CONTINUE_STATEMENT",
		"changecontent" : "",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 51400,
		"linenumber" : 196,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int i = qNameRef.indexOfFirstFieldBinding;]int i = (indexOfFirstFieldBinding + 1);",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 51400,
		"linenumber" : 200,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "i ++;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 51407,
		"linenumber" : 667,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "((i < tokenNumber) && (! (equals = CharOperation.equals(qualifiedName[(i ++)], currentTokenSource))))]((i < length) && (! (equals = CharOperation.equals(tokens[(i ++)], currentTokenSource))))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 51408,
		"linenumber" : 657,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "DO_STATEMENT",
		"changecontent" : "((token != TerminalSymbols.TokenNameEOF) && (accuracyIndex < accuracies.length))](token != TerminalSymbols.TokenNameEOF)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 51455,
		"linenumber" : 39,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "set.elementTable = new Object[length][];]set.elementTable = new Object[length];",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 51466,
		"linenumber" : 906,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! CharOperation.equals(otherMethodInfo.getSelector(), currentMethodInfo.getSelector()))](! CharOperation.equals(currentMethodInfo.getSelector(), otherMethodInfo.getSelector()))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 51468,
		"linenumber" : 17,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "private",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 51474,
		"linenumber" : 174,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "PotentialMatch potentialMatch = new PotentialMatch(this, file, (CompilationUnit) compilationUnit, unit, this.parser.matchSet);]MatchingOpenable matchingOpenable = new MatchingOpenable(this, file, (CompilationUnit) compilationUnit, unit, this.parser.matchSet);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 51481,
		"linenumber" : 587,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "scanner.setSourceBuffer(this.potentialMatches[this.potentialMatchesIndex].getSource());]scanner.setSourceBuffer(this.currentMatchingOpenable.getSource());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 51489,
		"linenumber" : 890,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "this.currentMatchingOpenable.openable;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 51489,
		"linenumber" : 912,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "this.potentialMatches[this.potentialMatchesIndex].openable;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 51490,
		"linenumber" : 915,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < length)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 51490,
		"linenumber" : 915,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int i = 0;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 51490,
		"linenumber" : 915,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int length = openables.length;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 51490,
		"linenumber" : 915,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "i ++;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 51490,
		"linenumber" : 930,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.potentialMatchesIndex = 0;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 51490,
		"linenumber" : 930,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(this.potentialMatchesIndex < this.potentialMatchesLength)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 51517,
		"linenumber" : 88,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new CreateTypeOperation(dest, (getSourceFor(element) + JavaModelManager.LINE_SEPARATOR), fForce);]new CreateTypeOperation(dest, (getSourceFor(element) + Util.LINE_SEPARATOR), fForce);",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 51532,
		"linenumber" : 72,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "buffer.append(\"package \").append(fName).append(\';\').append(JavaModelManager.LINE_SEPARATOR).append(JavaModelManager.LINE_SEPARATOR);]buffer.append(\"package \").append(fName).append(\';\').append(Util.LINE_SEPARATOR).append(Util.LINE_SEPARATOR);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 51559,
		"linenumber" : 17,
		"changeype" : "ADDITIONAL_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "org.eclipse.jdt.internal.codeassist.impl.AssistOptions.OPTION_ForceImplicitQualification : String",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 51559,
		"linenumber" : 17,
		"changeype" : "REMOVED_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "org.eclipse.jdt.internal.codeassist.impl.AssistOptions.OPTION_InsertQualificationForFieldsAndMethods : String",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 51560,
		"linenumber" : 22,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "private",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 51561,
		"linenumber" : 23,
		"changeype" : "ADDITIONAL_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "org.eclipse.jdt.internal.codeassist.impl.AssistOptions.forceImplicitQualification : boolean",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 51561,
		"linenumber" : 23,
		"changeype" : "REMOVED_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "org.eclipse.jdt.internal.codeassist.impl.AssistOptions.insertQualificationForFieldsAndMethods : boolean",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 51567,
		"linenumber" : 199,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "private",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 51607,
		"linenumber" : 607,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "requestor.acceptFieldReference(tokens[(tokensLength - 1)], ((nameRef.sourceEnd() - tokens[(tokensLength - 1)].length) + 1));]requestor.acceptFieldReference(tokens[(tokensLength - 1)], ((nameRef.sourceEnd - tokens[(tokensLength - 1)].length) + 1));",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 51622,
		"linenumber" : 409,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "pushOnAstStack(new CodeSnippetReturnStatement(expression, expression.sourceStart(), expression.sourceEnd(), evaluationContext));]pushOnAstStack(new CodeSnippetReturnStatement(expression, expression.sourceStart, expression.sourceEnd, evaluationContext));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 51762,
		"linenumber" : 161,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "System.arraycopy(toCompile, 0, (toCompile = new CompilationUnit[index]), 0, index);]System.arraycopy(toCompile, 0, (toCompile = new SourceFile[index]), 0, index);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 51765,
		"linenumber" : 389,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < classpath.length)](i < length)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 51793,
		"linenumber" : 15,
		"changeype" : "ATTRIBUTE_TYPE_CHANGE",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "LookupTable]SimpleLookupTable",
		"parententity" : "FIELD"
	},
	{
		"linetupleid" : 51858,
		"linenumber" : 124,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "this.locator.lookupEnvironment.cacheBinaryType(binaryType);]this.lookupEnvironment.cacheBinaryType(binaryType);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 51872,
		"linenumber" : 46,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.references = (HashtableOfObject) lastState.references.clone();]this.references = (SimpleLookupTable) lastState.references.clone();",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 51894,
		"linenumber" : 454,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "enum1.hasMoreElements()]iter.hasNext()",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 51895,
		"linenumber" : 455,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String newName = (String) enum1.nextElement();]String newName = (String) iter.next();",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 51902,
		"linenumber" : 51,
		"changeype" : "ATTRIBUTE_TYPE_CHANGE",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "ObjectSet",
		"parententity" : "FIELD"
	},
	{
		"linetupleid" : 51910,
		"linenumber" : 257,
		"changeype" : "PARAMETER_INSERT",
		"changeentity" : "PARAMETER",
		"changecontent" : "elementType",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 51910,
		"linenumber" : 282,
		"changeype" : "METHOD_RENAMING",
		"changeentity" : "METHOD",
		"changecontent" : "org.eclipse.jdt.internal.core.DeltaProcessor.createElements(IResource)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 51913,
		"linenumber" : 293,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String extension = resource.getFileExtension();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 51914,
		"linenumber" : 268,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "element = JavaCore.create((IProject) resource);",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 51914,
		"linenumber" : 294,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "extension = ((extension == null) ? null : extension.toLowerCase());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 51915,
		"linenumber" : 265,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(this.currentElement != null)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 51915,
		"linenumber" : 295,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(\"jar\".equals(extension) || \"zip\".equals(extension))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 51916,
		"linenumber" : 264,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "IJavaElement element = null;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 51916,
		"linenumber" : 297,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "IJavaProject[] projects = null;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 51917,
		"linenumber" : 271,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "element = this.currentElement.getJavaProject().getPackageFragmentRoot(resource);",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 51917,
		"linenumber" : 299,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "projects = JavaModelManager.getJavaModel(resource.getWorkspace()).getJavaProjects();",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 51919,
		"linenumber" : 274,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "IPackageFragmentRoot root = this.currentElement.getPackageFragmentRoot();",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 51919,
		"linenumber" : 304,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "ArrayList jars = new ArrayList();",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 51920,
		"linenumber" : 276,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "IPath pkgPath = path.removeFirstSegments(root.getPath().segmentCount());",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 51920,
		"linenumber" : 306,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "IJavaProject project = projects[i];",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 51921,
		"linenumber" : 277,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String pkg = Util.packageName(pkgPath);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 51921,
		"linenumber" : 308,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "IPath resourcePath = resource.getFullPath();",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 51921,
		"linenumber" : 308,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "IPath resourcePath = resource.getFullPath();]IPath path = resource.getFullPath();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 51922,
		"linenumber" : 275,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((root != null) && (! Util.conflictsWithOutputLocation(path, (JavaProject) root.getJavaProject())))",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 51922,
		"linenumber" : 314,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "rootPath.equals(resourcePath)",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 51923,
		"linenumber" : 262,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "this.popUntilPrefixOf(path);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 51923,
		"linenumber" : 315,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "jars.add(project.getPackageFragmentRoot((IFile) resource));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 51996,
		"linenumber" : 34,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super((int) (pos >>> 32), t);]super((int) pos, t);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 51997,
		"linenumber" : 35,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.sourceEnd = (int) pos;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 51997,
		"linenumber" : 37,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.classStart = (int) (pos >>> 32);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 52043,
		"linenumber" : 172,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "path.add(0, element);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 52043,
		"linenumber" : 172,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "path.insertElementAt(element, 0);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 52145,
		"linenumber" : 361,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "classes.add((IType) keys.nextElement());",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 52145,
		"linenumber" : 361,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "classes.add((IType) keys.nextElement());]classes.add((IType) iter.next());",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 52176,
		"linenumber" : 34,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "e.hasMoreElements()]iter.hasNext()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 52176,
		"linenumber" : 34,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Enumeration e = jInfo.fEntryNames.elements();]Iterator iter = jInfo.fEntryNames.iterator();",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 52177,
		"linenumber" : 35,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String child = (String) e.nextElement();]String child = (String) iter.next();",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 52189,
		"linenumber" : 207,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "packageFragToTypes.put(IPackageFragment.DEFAULT_PACKAGE_NAME, new Vector[]{new Vector(), new Vector()});]packageFragToTypes.put(IPackageFragment.DEFAULT_PACKAGE_NAME, new ArrayList[]{new ArrayList(), new ArrayList()});",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 52191,
		"linenumber" : 217,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "temp = (Vector[]) packageFragToTypes.get(eName);]temp = (ArrayList[]) packageFragToTypes.get(eName);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 52192,
		"linenumber" : 219,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "temp = new Vector[]{new Vector(), new Vector()};]temp = new ArrayList[]{new ArrayList(), new ArrayList()};",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 52196,
		"linenumber" : 250,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "classTemp = new Vector();]classTemp = new ArrayList();",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 52197,
		"linenumber" : 251,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "classTemp.addElement(value);]classTemp.add(value);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 52198,
		"linenumber" : 252,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "packageFragToTypes.put(key, new Vector[]{classTemp, new Vector()});]packageFragToTypes.put(key, new ArrayList[]{classTemp, new ArrayList()});",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 52358,
		"linenumber" : 238,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "java.util.Hashtable h = new java.util.Hashtable();]java.util.HashMap h = new java.util.HashMap();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 52406,
		"linenumber" : 12,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 52422,
		"linenumber" : 116,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "keys.hasMoreElements()]keys.hasNext()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 52422,
		"linenumber" : 116,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Enumeration keys = set.keys();]Iterator keys = set.keySet().iterator();",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 52423,
		"linenumber" : 117,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "AstNode node = (AstNode) keys.nextElement();]AstNode node = (AstNode) keys.next();",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 52439,
		"linenumber" : 78,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "this.add((IJavaProject) element, true, new Hashtable(2));]this.add((IJavaProject) element, true, new HashSet(2));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 52485,
		"linenumber" : 66,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "sourceFolder.getFullPath().equals(this.outputFolder)]sourceFolder.getFullPath().equals(this.outputFolder.getFullPath())",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 52486,
		"linenumber" : 243,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "enclosingTypeNames[(depth --)] = null;]enclosingTypeNames[(-- depth)] = null;",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 52490,
		"linenumber" : 30,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int l = qualifiedReferences.length;]int l = qualifiedNameReferences.length;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 52491,
		"linenumber" : 31,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(qualifiedName == qualifiedReferences[i])](qualifiedName == qualifiedNameReferences[i])",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 52505,
		"linenumber" : 278,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((root != null) && (! Util.conflictsWithOutputLocation(path, (JavaProject) root.getJavaProject())))]((root != null) && (! JavaModelManager.conflictsWithOutputLocation(path, (JavaProject) project)))",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 52776,
		"linenumber" : 63,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(((length = astLengthStack[(astLengthPtr --)]) == 1) && (astStack[astPtr] == null))](((length = astLengthStack[astLengthPtr]) == 1) && (astStack[astPtr] == null))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 52786,
		"linenumber" : 84,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_STATEMENT",
		"changecontent" : "scope.compareTypes(raisedException, caughtException)]Scope.compareTypes(raisedException, caughtException)",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 52862,
		"linenumber" : 356,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "TypeVector classes = fRootClasses.copy();]TypeVector classes = this.rootClasses.copy();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 52863,
		"linenumber" : 357,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Iterator iter = this.fClassToSuperclass.keySet().iterator();]Iterator iter = this.classToSuperclass.keySet().iterator();",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 52922,
		"linenumber" : 1211,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Iterator iter = fClassToSuperclass.values().iterator();]Iterator iter = this.classToSuperclass.values().iterator();",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 52934,
		"linenumber" : 222,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "PREFIX_EXPRESSION",
		"changecontent" : "++ i;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 52934,
		"linenumber" : 226,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "i ++;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 52962,
		"linenumber" : 17,
		"changeype" : "PARENT_CLASS_INSERT",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "IndexRequest",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 52962,
		"linenumber" : 17,
		"changeype" : "PARENT_INTERFACE_DELETE",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "IJob",
		"parententity" : "SUPER_INTERFACE_TYPES"
	},
	{
		"linetupleid" : 52969,
		"linenumber" : 171,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.receiverType = receiver.resolveType(scope);]this.actualReceiverType = (this.receiverType = receiver.resolveType(scope));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 53019,
		"linenumber" : 516,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(((((fieldBinding.declaringClass != this.actualReceiverType) && (! this.actualReceiverType.isArrayType())) && (fieldBinding.declaringClass != null)) && (fieldBinding.constant == NotAConstant)) && (((scope.environment().options.complianceLevel >= CompilerOptions.JDK1_4) && ((indexOfFirstFieldBinding > 1) || (! fieldBinding.isStatic()))) || (! fieldBinding.declaringClass.canBeSeenBy(scope))))](((((fieldBinding.declaringClass != this.actualReceiverType) && (! this.actualReceiverType.isArrayType())) && (fieldBinding.declaringClass != null)) && (fieldBinding.constant == NotAConstant)) && ((((scope.environment().options.complianceLevel >= CompilerOptions.JDK1_4) && ((indexOfFirstFieldBinding > 1) || (! fieldBinding.isStatic()))) && (fieldBinding.declaringClass.id != T_Object)) || (! fieldBinding.declaringClass.canBeSeenBy(scope))))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 53031,
		"linenumber" : 116,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "IPackageFragment[] frags = (JavaProject) project.getPackageFragmentsInRoots(fPackageFragmentRoots);]IPackageFragment[] frags = this.getPackageFragmentsInRoots(fPackageFragmentRoots, project);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 53048,
		"linenumber" : 170,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "this.lookupEnvironment.buildTypeBindings(unit);]this.locator.lookupEnvironment.buildTypeBindings(unit);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 53049,
		"linenumber" : 171,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "this.lookupEnvironment.completeTypeBindings(unit, false);]this.locator.lookupEnvironment.completeTypeBindings(unit, false);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 53050,
		"linenumber" : 182,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "this.lookupEnvironment.cacheBinaryType(binaryType);]this.locator.lookupEnvironment.cacheBinaryType(binaryType);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 53056,
		"linenumber" : 103,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.allSuperDeclaringTypeNames = new SuperTypeNamesCollector(this, locator.handleFactory, this.declaringType, progressMonitor).collect();]this.allSuperDeclaringTypeNames = new SuperTypeNamesCollector(this, locator, this.declaringType, progressMonitor).collect();",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 53064,
		"linenumber" : 342,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new ProblemReferenceBinding(compoundName, NotFound);]new ProblemReferenceBinding(CharOperation.subarray(compoundName, 0, i), NotFound);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 53069,
		"linenumber" : 92,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "synthetics = new Hashtable[]{new Hashtable(5), new Hashtable(5), new Hashtable(5)};]synthetics = new Hashtable[4];",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 53127,
		"linenumber" : 105,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "manageSyntheticReadAccessIfNecessary(currentScope, lastFieldBinding, ((binding == lastFieldBinding) ? 0 : otherBindings.length));]manageSyntheticReadAccessIfNecessary(currentScope, lastFieldBinding, lastReceiverType, ((lastFieldBinding == binding) ? 0 : otherBindingsCount));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 53130,
		"linenumber" : 393,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int otherBindingsCount = ((otherBindings == null) ? 0 : otherBindings.length);]int otherBindingsCount = ((this.otherCodegenBindings == null) ? 0 : otherCodegenBindings.length);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 53135,
		"linenumber" : 478,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "lastFieldBinding = otherBindings[i];]lastFieldBinding = otherCodegenBindings[i];",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 53138,
		"linenumber" : 709,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(binding = scope.getBinding(tokens, (bits & RestrictiveFlagMASK), this)).isValidBinding()](this.codegenBinding = (this.binding = scope.getBinding(tokens, (bits & RestrictiveFlagMASK), this))).isValidBinding()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 53224,
		"linenumber" : 19,
		"changeype" : "ADDITIONAL_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "org.eclipse.jdt.internal.core.newbuilder.SourceFile.SourceFile(String,char[])",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 53264,
		"linenumber" : 1379,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "this.type;]this.typeBinding;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 53304,
		"linenumber" : 93,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "expression.bits |= ValueForReturnMASK;]this.expression.bits |= ValueForReturnMASK;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 53325,
		"linenumber" : 518,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "IResource resource = enclosingElement.getUnderlyingResource();]IResource resource = this.getResource(enclosingElement);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 53354,
		"linenumber" : 118,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Scanner scanner = this.ast.scanner;]Scanner scanner = this.getAST().scanner;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 53411,
		"linenumber" : 987,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "org.eclipse.jdt.internal.core.newbuilder.JavaBuilder.readState(in);]JavaBuilder.readState(in);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 53415,
		"linenumber" : 80,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 53422,
		"linenumber" : 253,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "protected",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 53450,
		"linenumber" : 220,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "this.inInitializerPtr --;]this.inFieldInitializationPtr --;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 53493,
		"linenumber" : 258,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "System.arraycopy(argv, 0, (argv = new String[count]), 0, count);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 53533,
		"linenumber" : 190,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "TypeBinding methodType = ((methodScope.referenceContext instanceof AbstractMethodDeclaration) ? (AbstractMethodDeclaration) methodScope.referenceContext.binding.returnType : VoidBinding);]TypeBinding methodType = ((methodScope.referenceContext instanceof AbstractMethodDeclaration) ? (((methodBinding = (AbstractMethodDeclaration) methodScope.referenceContext.binding) == null) ? null : methodBinding.returnType) : VoidBinding);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 53560,
		"linenumber" : 47,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.qualification = (isCaseSensitive ? qualification : CharOperation.toLowerCase(qualification));]this.pkg = (isCaseSensitive ? pkg : CharOperation.toLowerCase(pkg));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 53734,
		"linenumber" : 155,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "initializationScope.fieldDeclarationIndex = binding.id;]initializationScope.fieldDeclarationIndex = this.binding.id;",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 53735,
		"linenumber" : 156,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "binding.constant = Constant.NotAConstant;]this.binding.constant = Constant.NotAConstant;",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 53736,
		"linenumber" : 157,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "TypeBinding tb = binding.type;]TypeBinding typeBinding = this.binding.type;",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 53737,
		"linenumber" : 158,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "TypeBinding initTb;]TypeBinding initializationTypeBinding;",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 53757,
		"linenumber" : 453,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(parent instanceof TypeDeclarationStatement);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 53757,
		"linenumber" : 453,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(parent instanceof Block);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 53761,
		"linenumber" : 40,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new IllegalArgumentException(Util.bind(\"convention.unit.notJavaName\"));]new IllegalArgumentException(org.eclipse.jdt.internal.core.Util.bind(\"convention.unit.notJavaName\"));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 53784,
		"linenumber" : 64,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "(CompilationUnit) this.getOriginalElement().close();](CompilationUnit) originalElement.close();",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 53793,
		"linenumber" : 242,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(BASE_NODE_SIZE + (5 * 4));](BASE_NODE_SIZE + (4 * 4));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 53796,
		"linenumber" : 434,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((((safeSubtreeMatch(node.getExpression(), o.getExpression()) && safeSubtreeMatch(node.getName(), o.getName())) && safeSubtreeListMatch(node.arguments(), o.arguments())) && (node.isAnonymousClassDeclaration() == o.isAnonymousClassDeclaration())) && safeSubtreeListMatch(node.bodyDeclarations(), o.bodyDeclarations()));](((safeSubtreeMatch(node.getExpression(), o.getExpression()) && safeSubtreeMatch(node.getName(), o.getName())) && safeSubtreeListMatch(node.arguments(), o.arguments())) && safeSubtreeMatch(node.getAnonymousClassDeclaration(), o.getAnonymousClassDeclaration()));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 53853,
		"linenumber" : 123,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "(FieldTypeProblemBase + NotFound)](IProblem.FieldTypeProblemBase + NotFound)",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 53854,
		"linenumber" : 124,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "(ArgumentProblemBase + NotFound)](IProblem.ArgumentProblemBase + NotFound)",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 53864,
		"linenumber" : 33,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "ProblemIrritants.ParsingErrorOnKeywordNoSuggestion]IProblem.ParsingErrorOnKeywordNoSuggestion",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 53865,
		"linenumber" : 34,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "ProblemIrritants.ParsingErrorOnKeyword]IProblem.ParsingErrorOnKeyword",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 53866,
		"linenumber" : 35,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "ProblemIrritants.ParsingError]IProblem.ParsingError",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 53867,
		"linenumber" : 36,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "ProblemIrritants.ParsingErrorNoSuggestion]IProblem.ParsingErrorNoSuggestion",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 53908,
		"linenumber" : 282,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "problems[0] = problemFactory.createProblem(importDeclaration, (IProblem.ImportProblemBase + ProblemReasons.NotFound), new String[]{new String(importDeclaration)}, ProblemSeverities.Warning, 0, (importDeclaration.length - 1), i);]problems[0] = problemFactory.createProblem(importDeclaration, IProblem.ImportNotFound, new String[]{new String(importDeclaration)}, ProblemSeverities.Warning, 0, (importDeclaration.length - 1), i);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 53911,
		"linenumber" : 125,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "(IProblem.FieldTypeProblemBase + NotFound)]IProblem.FieldTypeNotFound",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 53912,
		"linenumber" : 126,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "(IProblem.ArgumentProblemBase + NotFound)]IProblem.ArgumentTypeNotFound",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 53999,
		"linenumber" : 36,
		"changeype" : "ADDITIONAL_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "org.eclipse.jdt.internal.compiler.classfmt.ClassFileReader.ClassFileReader(byte[],char[],boolean)",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 54192,
		"linenumber" : 26,
		"changeype" : "ADDITIONAL_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "org.eclipse.jdt.internal.core.JarPackageFragmentRoot.jarPath : IPath",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 54192,
		"linenumber" : 26,
		"changeype" : "REMOVED_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "org.eclipse.jdt.internal.core.JarPackageFragmentRoot.fJarPath : IPath",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 54202,
		"linenumber" : 531,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "((! (currentNode instanceof MethodDeclaration)) && (! (currentNode instanceof Initializer)))](((! (currentNode instanceof MethodDeclaration)) && (! (currentNode instanceof Initializer))) && (! (currentNode instanceof FieldDeclaration)))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 54209,
		"linenumber" : 444,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "compatible[(compatibleIndex ++)] = methodBinding;]candidates[(candidatesCount ++)] = methodBinding;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 54210,
		"linenumber" : 446,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(compatibleIndex == 1)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 54210,
		"linenumber" : 461,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(candidatesCount == 1)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 54211,
		"linenumber" : 447,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "compatible[0];",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 54211,
		"linenumber" : 462,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "candidates[0];",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 54212,
		"linenumber" : 448,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(compatibleIndex == 0)](candidatesCount == 0)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 54213,
		"linenumber" : 473,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(visibleIndex == 1)](visiblesCount == 1)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 54214,
		"linenumber" : 474,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "compilationUnitScope().recordTypeReferences(visible[0].thrownExceptions);]compilationUnitScope().recordTypeReferences(candidates[0].thrownExceptions);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 54215,
		"linenumber" : 475,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "visible[0];",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 54215,
		"linenumber" : 495,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "candidates[0];",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 54238,
		"linenumber" : 41,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "protected",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 54270,
		"linenumber" : 532,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "MethodBinding[] candidates = new MethodBinding[foundSize];]MethodBinding[] candidates = new MethodBinding[(foundSize - startFoundSize)];",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 54284,
		"linenumber" : 81,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "boolean binaryExists = (((this.mode | BINARY) != 0) && doesFileExist((fileName + \".class\"), qualifiedPackageName));]boolean binaryExists = (((this.mode & BINARY) != 0) && doesFileExist((fileName + \".class\"), qualifiedPackageName));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 54285,
		"linenumber" : 82,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "boolean sourceExists = (((this.mode | SOURCE) != 0) && doesFileExist((fileName + \".java\"), qualifiedPackageName));]boolean sourceExists = (((this.mode & SOURCE) != 0) && doesFileExist((fileName + \".java\"), qualifiedPackageName));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 54302,
		"linenumber" : 289,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "DO_STATEMENT",
		"changecontent" : "(token != TerminalSymbols.TokenNameEOF)](token != ITerminalSymbols.TokenNameEOF)",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 54324,
		"linenumber" : 382,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "((! primitive) && (token == TerminalSymbols.TokenNameDOT))]((! primitive) && (token == ITerminalSymbols.TokenNameDOT))",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 54438,
		"linenumber" : 103,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "actionInfo = ((((condition != null) && (condition.constant != NotAConstant)) && (condition.constant.booleanValue() == false)) ? FlowInfo.DeadEnd : initsWhenTrue.copy());]actionInfo = (conditionIsInlinedToFalse ? FlowInfo.DeadEnd : initsWhenTrue.copy());",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 54485,
		"linenumber" : 261,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(position > lineEndTable[(length - 1)])",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 54485,
		"linenumber" : 261,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(position > lineEndTable[(length - 1)])](position <= lineEndTable[mid])",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 54494,
		"linenumber" : 31,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((flags & IConstants.AccAbstract) != 0);]((flags & AccAbstract) != 0);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 54970,
		"linenumber" : 270,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "root.getPackageFragment(pkgName.toString());]root.getPackageFragment(pkgName);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 55042,
		"linenumber" : 270,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "StringBuffer sb = new StringBuffer();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 55042,
		"linenumber" : 319,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int parameterTypesLenth = parameterTypes.length;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 55043,
		"linenumber" : 272,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "PREFIX_EXPRESSION",
		"changecontent" : "++ i;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 55043,
		"linenumber" : 272,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < parameterTypes.length)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 55043,
		"linenumber" : 321,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < parameterTypesLenth)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 55043,
		"linenumber" : 321,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "i ++;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 55048,
		"linenumber" : 436,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "(typeSignature.charAt(count) == C_ARRAY)",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 55051,
		"linenumber" : 482,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int i = (methodSignature.indexOf(C_PARAM_START) + 1);",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 55053,
		"linenumber" : 503,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "i = (methodSignature.indexOf(C_SEMICOLON, i) + 1);",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 55080,
		"linenumber" : 690,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new String[]{name};",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 55081,
		"linenumber" : 693,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "((dot = name.indexOf(C_DOT, (dot + 1))) != (- 1))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 55105,
		"linenumber" : 359,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "buffer.append(Util.bind(\"disassembler.commentstart\")).append(\' \').append(Util.bind(\"classfileformat.fieldddescriptor\")).append(\' \').append(\"#\").append(fieldInfo.getDescriptorIndex()).append(\' \').append(fieldInfo.getDescriptor()).append(\' \').append(Util.bind(\"disassembler.commentend\"));]buffer.append(Util.bind(\"disassembler.commentstart\")).append(\' \').append(Util.bind(\"classfileformat.fieldddescriptor\")).append(\' \').append(Util.bind(\"classfileformat.fielddescriptorindex\")).append(fieldInfo.getDescriptorIndex()).append(\' \').append(fieldInfo.getDescriptor()).append(\' \').append(Util.bind(\"disassembler.commentend\"));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 55133,
		"linenumber" : 163,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "buffer.append(\'[\').append(Util.bind(\"disassembler.inner_class_info_name\")).append(\' \').append(\'#\').append(innerClassNameIndex);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 55133,
		"linenumber" : 163,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "buffer.append(\'[\').append(Util.bind(\"disassembler.inner_class_info_name\")).append(\' \').append(\'#\').append(innerClassNameIndex);]buffer.append(Util.bind(\"disassembler.openinnerclassentry\")).append(Util.bind(\"disassembler.inner_class_info_name\")).append(Util.bind(\"disassembler.constantpoolentry\")).append(innerClassNameIndex);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 55259,
		"linenumber" : 362,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new IncompleteClassPathException(missingClassFile);]new AbortCompilation(true, new IncompleteClassPathException(missingClassFile));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 55263,
		"linenumber" : 362,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new AbortCompilation(true, new IncompleteClassPathException(missingClassFile));]new IncompleteClassPathException(missingClassFile);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 55285,
		"linenumber" : 326,
		"changeype" : "ADDITIONAL_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "org.eclipse.jdt.internal.core.JavaModelManager.Manager : JavaModelManager",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 55285,
		"linenumber" : 326,
		"changeype" : "REMOVED_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "org.eclipse.jdt.internal.core.JavaModelManager.fgManager : JavaModelManager",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 55286,
		"linenumber" : 343,
		"changeype" : "ATTRIBUTE_RENAMING",
		"changeentity" : "FIELD",
		"changecontent" : "org.eclipse.jdt.internal.core.JavaModelManager.fFire : boolean",
		"parententity" : "FIELD"
	},
	{
		"linetupleid" : 55286,
		"linenumber" : 346,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "protected",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 55344,
		"linenumber" : 150,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "(list[left].getPath().compareTo(mid.getPath()) < 0)](list[left].path.compareTo(mid) < 0)",
		"parententity" : "DO_STATEMENT"
	},
	{
		"linetupleid" : 55345,
		"linenumber" : 153,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "(mid.getPath().compareTo(list[right].getPath()) < 0)](mid.compareTo(list[right].path) < 0)",
		"parententity" : "DO_STATEMENT"
	},
	{
		"linetupleid" : 55465,
		"linenumber" : 63,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(position == fGapStart)](position == this.gapStart)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 55466,
		"linenumber" : 64,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int size = ((fGapEnd - fGapStart) - sizeHint);]int size = ((this.gapEnd - this.gapStart) - sizeHint);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 55467,
		"linenumber" : 65,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((fLowWatermark <= size) && (size <= fHighWatermark))]((this.lowWatermark <= size) && (size <= this.highWatermark))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 55474,
		"linenumber" : 113,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SYNCHRONIZED_STATEMENT",
		"changecontent" : "fLock]this.lock",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 55525,
		"linenumber" : 243,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "fGapStart = (fGapEnd = position);]this.gapStart = (this.gapEnd = position);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 55621,
		"linenumber" : 17,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "private",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 55624,
		"linenumber" : 168,
		"changeype" : "UNCLASSIFIED_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "synchronized",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 55630,
		"linenumber" : 341,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new JavaProject(this.workspace.getRoot().getProject(name), this);]new JavaProject(this.getWorkspace().getRoot().getProject(name), this);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 55639,
		"linenumber" : 931,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(this.betweenCatchAndRightParen ? new CompletionOnQualifiedExceptionReference(previousIdentifiers, name, positions) : new CompletionOnQualifiedTypeReference(previousIdentifiers, name, positions));]((this.betweenCatchAndRightParen || this.nextTypeReferenceIsException) ? new CompletionOnQualifiedExceptionReference(previousIdentifiers, name, positions) : (this.nextTypeReferenceIsInterface ? new CompletionOnQualifiedInterfaceReference(previousIdentifiers, name, positions) : (this.nextTypeReferenceIsClass ? new CompletionOnQualifiedClassReference(previousIdentifiers, name, positions) : new CompletionOnQualifiedTypeReference(previousIdentifiers, name, positions))));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 55640,
		"linenumber" : 931,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(this.betweenCatchAndRightParen ? new CompletionOnQualifiedExceptionReference(previousIdentifiers, name, positions) : new CompletionOnQualifiedTypeReference(previousIdentifiers, name, positions));]((this.betweenCatchAndRightParen || this.nextTypeReferenceIsException) ? new CompletionOnQualifiedExceptionReference(previousIdentifiers, name, positions) : (this.nextTypeReferenceIsInterface ? new CompletionOnQualifiedInterfaceReference(previousIdentifiers, name, positions) : (this.nextTypeReferenceIsClass ? new CompletionOnQualifiedClassReference(previousIdentifiers, name, positions) : new CompletionOnQualifiedTypeReference(previousIdentifiers, name, positions))));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 55646,
		"linenumber" : 49,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "IndexedFile indexedFile = new IndexedFile(document, (this.files.size + 1));]IndexedFile indexedFile = new IndexedFile(document, (this.files.size() + 1));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 55650,
		"linenumber" : 133,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "IndexedFile[] indexedfiles = new IndexedFile[files.size];]IndexedFile[] indexedfiles = new IndexedFile[files.size()];",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 55663,
		"linenumber" : 204,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "packageFragToTypes.put(IPackageFragment.DEFAULT_PACKAGE_NAME, new ArrayList[]{new ArrayList(), new ArrayList()});]packageFragToTypes.put(IPackageFragment.DEFAULT_PACKAGE_NAME, new ArrayList[]{EMPTY_LIST, EMPTY_LIST});",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 55665,
		"linenumber" : 296,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "fragInfo.setEntryNames(entries[0]);]fragInfo.setEntryNames(entries[JAVA]);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 55668,
		"linenumber" : 303,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "entries[1].toArray(resNames);]entries[NON_JAVA].toArray(resNames);",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 55690,
		"linenumber" : 41,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < length)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 55690,
		"linenumber" : 41,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int i = 0;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 55690,
		"linenumber" : 41,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "i ++;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 55690,
		"linenumber" : 45,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "((-- i) >= 0)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 55690,
		"linenumber" : 45,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int i = elements.length;]int length = elements.length;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 55713,
		"linenumber" : 476,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "char car = this.contents[i];]char car = contents[i];",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 55741,
		"linenumber" : 97,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "char[] suffix = CharOperation.concat(source.substring(insertion).toCharArray(), new char[]{\'}\'});]char[] suffix = CharOperation.concat(new char[]{\'}\'}, source.substring(insertion).toCharArray());",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 55773,
		"linenumber" : 73,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "BasicCompilationUnit cu = new BasicCompilationUnit(contents, (current.getElementName() + \".java\"), null);]BasicCompilationUnit cu = new BasicCompilationUnit(contents, null, (current.getElementName() + \".java\"), null);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 55800,
		"linenumber" : 362,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new IncompleteClassPathException(missingClassFile);]new MissingClassFileException(missingClassFile);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 56012,
		"linenumber" : 324,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "out.writeInt((Integer) valueTable[i].intValue());]out.writeLong((Long) valueTable[i].longValue());",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 56089,
		"linenumber" : 138,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(! isClass);](! this.isClass);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 56116,
		"linenumber" : 828,
		"changeype" : "REMOVING_METHOD_OVERRIDABILITY",
		"changeentity" : "MODIFIER",
		"changecontent" : "final",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 56116,
		"linenumber" : 829,
		"changeype" : "UNCLASSIFIED_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "synchronized",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 56194,
		"linenumber" : 336,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "buffer.append(((\"\\\"\" + constantPoolEntry.getStringValue()) + \"\\\"\"));]buffer.append(((\"\\\"\" + decodeStringValue(constantPoolEntry.getStringValue())) + \"\\\"\"));",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 56198,
		"linenumber" : 335,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "buffer.append(((\"\\\'\" + Character.toString((char) constantPoolEntry.getIntegerValue())) + \"\\\'\"));]buffer.append(((\"\\\'\" + (char) constantPoolEntry.getIntegerValue()) + \"\\\'\"));",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 56200,
		"linenumber" : 100,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "((maxType > 0) && (type != null))]((maxType >= 0) && (type != null))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 56227,
		"linenumber" : 725,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "currentMethodInfos[index1].isSynthetic()]((m = currentMethodInfos[index1]).isSynthetic() || m.isClinit())",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 56440,
		"linenumber" : 142,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "INameEnvironment env = new FileSystem(new String[]{(this.jrePath + \"\\\\lib\\\\rt.jar\")}, new String[0], null);]INameEnvironment env = new FileSystem(new String[]{Util.getJavaClassLib()}, new String[0], null);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 56481,
		"linenumber" : 808,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "char[] declaringQualification = ((lastDot != (- 1)) ? fullDeclaringName.substring(0, lastDot).toCharArray() : NO_CHAR);]char[] declaringQualification = ((lastDot != (- 1)) ? fullDeclaringName.substring(0, lastDot).toCharArray() : CharOperation.NO_CHAR);",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 56482,
		"linenumber" : 926,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "declaringQualification = ((lastDot != (- 1)) ? fullDeclaringName.substring(0, lastDot).toCharArray() : NO_CHAR);]declaringQualification = ((lastDot != (- 1)) ? fullDeclaringName.substring(0, lastDot).toCharArray() : CharOperation.NO_CHAR);",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 56486,
		"linenumber" : 104,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((getPackage() == null) ? NoChar : getPackage().readableName());]((getPackage() == null) ? CharOperation.NO_CHAR : getPackage().readableName());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 56491,
		"linenumber" : 510,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "char[][] tokens = ((this.simpleName == null) ? NO_CHAR_CHAR : new char[][]{this.simpleName});]char[][] tokens = ((this.simpleName == null) ? CharOperation.NO_CHAR_CHAR : new char[][]{this.simpleName});",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 56513,
		"linenumber" : 688,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "buf.append((\"\\n-TODO tag : \" + ((this.toDoTag == null) ? \"<null>\" : new String(this.toDoTag))));]buf.append((\"\\n-task tag : \" + ((this.taskTags == null) ? \"\" : new String(CharOperation.concatWith(this.taskTags, \',\')))));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 56573,
		"linenumber" : 261,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "(((currentPosition > 0) || (currentCharacter == \'\\r\')) || (currentCharacter == \'\\n\'))](currentPosition > 0)",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 56631,
		"linenumber" : 497,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i <= this.actionsPtr)](i <= this.actionsEnd)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 56770,
		"linenumber" : 434,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 56771,
		"linenumber" : 435,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 56772,
		"linenumber" : 436,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 56773,
		"linenumber" : 437,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 56774,
		"linenumber" : 438,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 56775,
		"linenumber" : 439,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 56776,
		"linenumber" : 440,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 56777,
		"linenumber" : 441,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 56785,
		"linenumber" : 76,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(\"Classpath for jar file \" + zipFile);](\"Classpath for jar file \" + zipFile.getName());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 56786,
		"linenumber" : 156,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String encoding = this.javaBuilder.javaProject.getOption(JavaCore.CORE_ENCODING, true);]String encoding = javaBuilder.javaProject.getOption(JavaCore.CORE_ENCODING, true);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 56789,
		"linenumber" : 101,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new SelectionNodeFound(findNotDefaultAbstractMethod(binding));]new SelectionNodeFound(findNonDefaultAbstractMethod(binding));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 56797,
		"linenumber" : 223,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(\"HierarchyScope on \" + (JavaElement) fHierarchy.getType().toStringWithAncestors());](\"HierarchyScope on \" + (JavaElement) this.focusType.toStringWithAncestors());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 56844,
		"linenumber" : 326,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(getDeclaringType() == null);](getDeclaringType() != null);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 56902,
		"linenumber" : 808,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "requestor.exitField(((fieldDeclaration.initialization == null) ? (- 1) : fieldDeclaration.initialization.sourceStart), fieldEndPosition);]requestor.exitField(((((((((((fieldDeclaration.initialization == null) || (fieldDeclaration.initialization instanceof ArrayInitializer)) || (fieldDeclaration.initialization instanceof AllocationExpression)) || (fieldDeclaration.initialization instanceof ArrayAllocationExpression)) || (fieldDeclaration.initialization instanceof Assignment)) || (fieldDeclaration.initialization instanceof ClassLiteralAccess)) || (fieldDeclaration.initialization instanceof MessageSend)) || (fieldDeclaration.initialization instanceof ArrayReference)) || (fieldDeclaration.initialization instanceof ThisReference)) ? (- 1) : fieldDeclaration.initialization.sourceStart), fieldEndPosition);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 57034,
		"linenumber" : 994,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((((ast != null) && (this.invocationPtr >= 0)) && (ast instanceof Expression)) && (((selector = this.selectorStack[this.invocationPtr]) == THIS_CONSTRUCTOR) || (selector == SUPER_CONSTRUCTOR)))]((((ast != null) && (topKnownElementKind(ASSIST_PARSER) == K_SELECTOR)) && (ast instanceof Expression)) && (((selector = topKnownElementInfo(ASSIST_PARSER)) == THIS_CONSTRUCTOR) || (selector == SUPER_CONSTRUCTOR)))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 57166,
		"linenumber" : 52,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "this.resolvedType = memberTb;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 57166,
		"linenumber" : 52,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "binding = memberTb;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 57173,
		"linenumber" : 64,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new CompletionNodeFound(this, this.expressionType, scope);]new CompletionNodeFound(this, this.resolvedType, scope);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 57186,
		"linenumber" : 99,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "this.resolvedType = this.resolvedType;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 57186,
		"linenumber" : 99,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "this.expressionType = binding;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 57216,
		"linenumber" : 170,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "excludePath = (IJavaElement) this.unitToSkip.getUnderlyingResource().getFullPath().toString();]excludePath = (IJavaElement) this.unitToSkip.getPath().toString();",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 57245,
		"linenumber" : 516,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "iPath ++;]iPathSegment ++;",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 57246,
		"linenumber" : 517,
		"changeype" : "STATEMENT_ORDERING_CHANGE",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "iPattern ++;",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 57246,
		"linenumber" : 517,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "iPattern ++;]iPatternSegment ++;",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 57247,
		"linenumber" : 521,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(patternChar == \'*\')](patternSegment == doubleStar)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 57248,
		"linenumber" : 522,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "segmentStart = (++ iPattern);]segmentStart = (++ iPatternSegment);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 57249,
		"linenumber" : 526,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int prefixStart = iPath;]int prefixStart = iPathSegment;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 57250,
		"linenumber" : 527,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "((iPath < pathLength) && (iPattern < patternLength))]((iPathSegment < pathSegmentLength) && (iPatternSegment < patternSegmentLength))",
		"parententity" : "LABELED_STATEMENT"
	},
	{
		"linetupleid" : 57285,
		"linenumber" : 555,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(((segmentStart == patternSegmentLength) || ((iPathSegment == pathSegmentLength) && (iPatternSegment == patternSegmentLength))) || ((iPatternSegment == (patternSegmentLength - 1)) && (patternSegments[iPatternSegment] == doubleStar)));](((segmentStart >= patternSegmentEnd) || ((iPath >= pathLength) && (iPattern >= patternLength))) || (((iPattern == (patternLength - 2)) && (pattern[iPattern] == \'*\')) && (pattern[(iPattern + 1)] == \'*\')));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 57300,
		"linenumber" : 519,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "(((iPattern < patternLength) && (! freePrefixDoubleStar)) && (! (((patternSegmentEnd == (iPattern + 2)) && (pattern[iPattern] == \'*\')) && (pattern[(iPattern + 1)] == \'*\'))))](((pSegmentStart < pLength) && (! freePrefixDoubleStar)) && (! (((pSegmentEnd == (pSegmentStart + 2)) && (pattern[pSegmentStart] == \'*\')) && (pattern[(pSegmentStart + 1)] == \'*\'))))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 57349,
		"linenumber" : 370,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "private",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 57365,
		"linenumber" : 75,
		"changeype" : "REMOVING_ATTRIBUTE_MODIFIABILITY",
		"changeentity" : "MODIFIER",
		"changecontent" : "final",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 57365,
		"linenumber" : 75,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "private",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 57390,
		"linenumber" : 524,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "(((pSegmentStart < pLength) && (! freePrefixDoubleStar)) && (! (((pSegmentEnd == (pSegmentStart + 2)) && (pattern[pSegmentStart] == \'*\')) && (pattern[(pSegmentStart + 1)] == \'*\'))))](((pSegmentStart < pLength) && (! freeLeadingDoubleStar)) && (! (((pSegmentEnd == (pSegmentStart + 2)) && (pattern[pSegmentStart] == \'*\')) && (pattern[(pSegmentStart + 1)] == \'*\'))))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 57421,
		"linenumber" : 50,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "private",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 57480,
		"linenumber" : 223,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "messageSend.selector = identifierStack[info];]messageSend.selector = identifierStack[selector];",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 57506,
		"linenumber" : 332,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new ImportReference(CharOperation.splitOn(\'.\', importName, 0, (max - (onDemand ? 3 : 1))), positions, onDemand);]new ImportReference(CharOperation.splitOn(\'.\', importName, 0, (max - (onDemand ? 2 : 0))), positions, onDemand);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 57567,
		"linenumber" : 222,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.codegenBinding = (this.binding = ((receiver == ThisReference.ThisImplicit) ? scope.getImplicitMethod(selector, argumentTypes, this) : scope.getMethod(this.receiverType, selector, argumentTypes, this)));]this.codegenBinding = (this.binding = (receiver.isImplicitThis() ? scope.getImplicitMethod(selector, argumentTypes, this) : scope.getMethod(this.receiverType, selector, argumentTypes, this)));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 57776,
		"linenumber" : 159,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "ClasspathLocation[] existingLocations = (ClasspathLocation[]) binaryLocationsPerProject.get(p);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 57776,
		"linenumber" : 170,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "IResource[] existingResources = (IResource[]) binaryResources.get(p);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 57777,
		"linenumber" : 171,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(existingResources == null)",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 57777,
		"linenumber" : 171,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(existingResources == null)](existingLocations == null)",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 57778,
		"linenumber" : 161,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "existingLocations = new ClasspathLocation[]{bLocation};",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 57778,
		"linenumber" : 172,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "existingResources = new IResource[]{null, resource};",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 57904,
		"linenumber" : 775,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "folder.getFile(filePath.lastSegment()).delete(true, null);]fWorkspace.getRoot().getFile(filePath).delete(true, null);",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 58077,
		"linenumber" : 42,
		"changeype" : "REMOVED_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "org.eclipse.jdt.internal.compiler.ast.UnaryExpression.conditionalConstant()",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 58077,
		"linenumber" : 43,
		"changeype" : "ADDITIONAL_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "org.eclipse.jdt.internal.compiler.ast.UnaryExpression.optimizedBooleanConstant()",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 58081,
		"linenumber" : 69,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_STATEMENT",
		"changecontent" : "(expression.implicitConversion >> 4)](this.expression.implicitConversion >> 4)",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 58148,
		"linenumber" : 166,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Constant condCst;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 58149,
		"linenumber" : 167,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "boolean hasThenPart = (! ((((((cst = condition.constant) != NotAConstant) && (cst.booleanValue() == false)) || (thenStatement == null)) || thenStatement.isEmptyBlock()) || (((condCst = condition.conditionalConstant()) != NotAConstant) && (condCst.booleanValue() == false))));]boolean hasThenPart = (! (((((cst = this.condition.optimizedBooleanConstant()) != NotAConstant) && (cst.booleanValue() == false)) || (this.thenStatement == null)) || this.thenStatement.isEmptyBlock()));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 58159,
		"linenumber" : 76,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "thenFlowInfo = (((((cst = condition.constant) != NotAConstant) && (cst.booleanValue() == false)) || (((cst = condition.optimizedBooleanConstant()) != NotAConstant) && (cst.booleanValue() == false))) ? flowInfo.initsWhenTrue().copy().markAsFakeReachable(true) : flowInfo.initsWhenTrue().copy());]thenFlowInfo = (((condConstant != NotAConstant) && (condConstant.booleanValue() == false)) ? flowInfo.initsWhenTrue().copy().markAsFakeReachable(true) : flowInfo.initsWhenTrue().copy());",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 58168,
		"linenumber" : 221,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(binding = scope.getConstructor((ReferenceBinding) receiverType, argumentTypes, this)).isValidBinding()](this.binding = scope.getConstructor((ReferenceBinding) receiverType, argumentTypes, this)).isValidBinding()",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 58170,
		"linenumber" : 229,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "arguments[i].implicitWidening(binding.parameters[i], argumentTypes[i]);]arguments[i].implicitWidening(this.binding.parameters[i], argumentTypes[i]);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 58303,
		"linenumber" : 33,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(parent, associatedNode, NoExceptions, scope, FlowInfo.DeadEnd);]super(parent, associatedNode, NoExceptions, scope, FlowInfo.DEAD_END);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 58428,
		"linenumber" : 179,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((initialization.isConstantValueOfTypeAssignableToType(initTb, tb) || (tb.isBaseType() && BaseTypeBinding.isWidening(tb.id, initTb.id))) || Scope.areTypesCompatible(initTb, tb))]((initialization.isConstantValueOfTypeAssignableToType(initTb, tb) || (tb.isBaseType() && BaseTypeBinding.isWidening(tb.id, initTb.id))) || initTb.isCompatibleWith(tb))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 58429,
		"linenumber" : 78,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(Scope.areTypesCompatible(expressionType, castType) || BaseTypeBinding.isNarrowing(castType.id, expressionType.id))](expressionType.isCompatibleWith(castType) || BaseTypeBinding.isNarrowing(castType.id, expressionType.id))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 58434,
		"linenumber" : 178,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! Scope.areTypesCompatible(castType, expressionType))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 58434,
		"linenumber" : 178,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! Scope.areTypesCompatible(castType, expressionType))](! castType.isCompatibleWith(expressionType))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 58643,
		"linenumber" : 55,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((((((\"Problem : \" + message) + \" [ resource : <\") + resourcePath) + \"> location <\") + location) + \"> ]\");]((((\"Problem : \" + message) + \" [ resource : <\") + resourcePath) + \"> ]\");",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 58652,
		"linenumber" : 246,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "(Clinit) method.analyseCode(scope, staticInitializerContext, flowInfo.copy().unconditionalInits().addInitializationsFrom(staticFieldInfo.unconditionalInits().discardNonFieldInitializations()));](Clinit) method.analyseCode(scope, staticInitializerContext, staticFieldInfo.unconditionalInits().discardNonFieldInitializations().addInitializationsFrom(outerInfo));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 58736,
		"linenumber" : 524,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "allowNestingInOutput[length] = true;]allowNestingInOutput = true;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 58742,
		"linenumber" : 231,
		"changeype" : "PARAMETER_DELETE",
		"changeentity" : "PARAMETER",
		"changecontent" : "p",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 58742,
		"linenumber" : 234,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "private",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 58752,
		"linenumber" : 112,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "final char[][] exclusionPatterns = (sourceLocation.sourceFolder.equals(sourceLocation.binaryFolder) ? sourceLocation.exclusionPatterns : null);]final char[][] exclusionPatterns = (isOutputFolder ? sourceLocation.exclusionPatterns : null);",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 58822,
		"linenumber" : 28,
		"changeype" : "PARAMETER_ORDERING_CHANGE",
		"changeentity" : "PARAMETER",
		"changecontent" : "projectPath",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 58823,
		"linenumber" : 443,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_STATEMENT",
		"changecontent" : "typeName[index]]typeName[0]",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 58824,
		"linenumber" : 508,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "char[] sig = (primitive ? null : new char[length]);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 58825,
		"linenumber" : 509,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int sigIndex = 0;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 58825,
		"linenumber" : 509,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int sigIndex = 0;]int sigIndex = (arrayCount + 1);",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 58826,
		"linenumber" : 500,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int startID = 0;",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 58826,
		"linenumber" : 510,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int arrayCount = 0;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 58827,
		"linenumber" : 511,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int startID = (primitive ? (- 1) : 0);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 58837,
		"linenumber" : 522,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(sigIndex >= sigLength)",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 58837,
		"linenumber" : 522,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(sigIndex >= sigLength)](sigLength > sigIndex)",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 58843,
		"linenumber" : 530,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "arrayCount ++;",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 58851,
		"linenumber" : 540,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "default",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 59104,
		"linenumber" : 1460,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String varPref = (CP_VARIABLE_PREFERENCES_PREFIX + varName);]String variableKey = (CP_VARIABLE_PREFERENCES_PREFIX + variableName);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 59105,
		"linenumber" : 1461,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String varString = ((varPath == null) ? CP_VARIABLE_IGNORE : varPath.toString());]String variableString = ((variablePath == null) ? CP_ENTRY_IGNORE : variablePath.toString());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 59106,
		"linenumber" : 1462,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "preferences.setDefault(varPref, CP_VARIABLE_IGNORE);]preferences.setDefault(variableKey, CP_ENTRY_IGNORE);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 59107,
		"linenumber" : 1463,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "preferences.setValue(varPref, varString);]preferences.setValue(variableKey, variableString);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 59210,
		"linenumber" : 77,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "modifiers = ((modifiers & ((- AccAlternateModifierProblem) - 1)) | AccModifierProblem);]modifiers = ((modifiers & (~ AccAlternateModifierProblem)) | AccModifierProblem);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 59220,
		"linenumber" : 552,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.newResolvedPath = (this.newResolvedPath = project.getResolvedClasspath(true, this.canChangeResource));]this.newResolvedPath = project.getResolvedClasspath(true, this.canChangeResource);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 59410,
		"linenumber" : 545,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new ProblemMethodBinding(candidates[0].selector, candidates[0].parameters, candidates[0].declaringClass, NotVisible);]new ProblemMethodBinding(candidates[0], candidates[0].selector, candidates[0].parameters, NotVisible);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 59457,
		"linenumber" : 51,
		"changeype" : "PARAMETER_TYPE_CHANGE",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "jarPath: String]jarPath: IPath",
		"parententity" : "PARAMETER"
	},
	{
		"linetupleid" : 59458,
		"linenumber" : 52,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(null, project, jarPath);]super(null, project, jarPath.toString());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 59459,
		"linenumber" : 53,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.jarPath = new Path(jarPath);]this.jarPath = jarPath;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 59467,
		"linenumber" : 851,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "model.getHandleFromMementoForRoot(memento, proj, projectEnd, memento.length());",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 59467,
		"linenumber" : 851,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "proj.getPackageFragmentRoot(new Path((Path.SEPARATOR + memento.substring((modelEnd + 1)))));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 59510,
		"linenumber" : 62,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.categories = new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9};]this.categories = new int[]{1, 2, 3, 7, 6, 4, 5, 8, 9};",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 59530,
		"linenumber" : 880,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((previousElement.id == SortJavaElement.MULTIPLE_FIELD) && ((SortMultipleFielDeclaration) previousElement.declarationStart == declarationStart))]((previousElement.id == SortJavaElement.MULTIPLE_FIELD) && ((SortMultipleFieldDeclaration) previousElement.declarationStart == declarationStart))",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 59531,
		"linenumber" : 881,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "(SortMultipleFielDeclaration) previousElement.addField(fieldDeclaration);](SortMultipleFieldDeclaration) previousElement.addField(fieldDeclaration);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 59535,
		"linenumber" : 373,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "marker.setAttributes(new String[]{IMarker.MESSAGE, IMarker.PRIORITY, IMarker.DONE, IMarker.CHAR_START, IMarker.CHAR_END, IMarker.LINE_NUMBER, \"readOnly\"}, new Object[]{task.getMessage(), new Integer(priority), new Boolean(false), new Integer(task.getSourceStart()), new Integer((task.getSourceEnd() + 1)), new Integer(task.getSourceLineNumber()), new Boolean(true)});]marker.setAttributes(new String[]{IMarker.MESSAGE, IMarker.PRIORITY, IMarker.DONE, IMarker.CHAR_START, IMarker.CHAR_END, IMarker.LINE_NUMBER, \"userEditable\"}, new Object[]{task.getMessage(), new Integer(priority), new Boolean(false), new Integer(task.getSourceStart()), new Integer((task.getSourceEnd() + 1)), new Integer(task.getSourceLineNumber()), new Boolean(false)});",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 59622,
		"linenumber" : 50,
		"changeype" : "REMOVING_CLASS_DERIVABILITY",
		"changeentity" : "MODIFIER",
		"changecontent" : "final",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 59643,
		"linenumber" : 51,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(null, project, jarPath.toString());]super(null, project, jarPath.lastSegment());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 59644,
		"linenumber" : 59,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(resource, project, resource.getFullPath().toString());]super(resource, project, resource.getName());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 59689,
		"linenumber" : 63,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "JarPackageFragmentRoot jar = (JarPackageFragmentRoot) this.focus;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 59733,
		"linenumber" : 18,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 59733,
		"linenumber" : 18,
		"changeype" : "REMOVING_ATTRIBUTE_MODIFIABILITY",
		"changeentity" : "MODIFIER",
		"changecontent" : "final",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 59733,
		"linenumber" : 18,
		"changeype" : "REMOVED_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "org.eclipse.jdt.internal.compiler.parser.ParserBasicInformation.MAX_NAME_LENGTH : int",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 59733,
		"linenumber" : 18,
		"changeype" : "REMOVED_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "org.eclipse.jdt.internal.compiler.parser.ParserBasicInformation.NUM_STATES : int",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 59733,
		"linenumber" : 18,
		"changeype" : "REMOVED_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "org.eclipse.jdt.internal.compiler.parser.ParserBasicInformation.ERROR_SYMBOL : int",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 59943,
		"linenumber" : 137,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((this.focus == null) || this.canSeeFocus(path))]((projectOrJarFocus == null) || canSeeFocus(projectOrJarFocus, this.isPolymorphicSearch, path))",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 60166,
		"linenumber" : 153,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int amountOfWorkForSubtypes = (focusIsObject ? 5 : 70);]int amountOfWorkForSubtypes = (focusIsObject ? 5 : 80);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 60225,
		"linenumber" : 192,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "DO_STATEMENT",
		"changecontent" : "(bytesRead > 0)",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 60225,
		"linenumber" : 193,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "DO_STATEMENT",
		"changecontent" : "(amountRead != (- 1))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 60238,
		"linenumber" : 64,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new AssertionFailedException(Util.bind(\"assert.nullArgument\", message));]new AssertionFailedException((\"null argument; \" + message));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 60249,
		"linenumber" : 421,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "buffer.append(\"First job: \").append(awaitingJobs[jobStart]).append(\'\\n\');",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 60249,
		"linenumber" : 421,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "buffer.append(\"First job: \").append(awaitingJobs[jobStart]).append(\'\\n\');]buffer.append(i).append(((\" - job[\" + i) + \"]: \")).append(awaitingJobs[(jobStart + i)]).append(\'\\n\');",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 60272,
		"linenumber" : 67,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new AbortCompilation(compilationResult);]new AbortCompilation(this.compilationResult);",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 60350,
		"linenumber" : 132,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(declaringClass == type)](declaringClass == currentType)",
		"parententity" : "DO_STATEMENT"
	},
	{
		"linetupleid" : 60352,
		"linenumber" : 133,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(declaringPackage != type.fPackage)](declaringPackage != currentType.fPackage)",
		"parententity" : "DO_STATEMENT"
	},
	{
		"linetupleid" : 60354,
		"linenumber" : 131,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "DO_STATEMENT",
		"changecontent" : "((type = type.superclass()) != null)]((currentType = currentType.superclass()) != null)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 60394,
		"linenumber" : 423,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "MethodBinding[] methods = getMethods(ConstructorDeclaration.ConstantPoolName);]MethodBinding[] constructors = getMethods(ConstructorDeclaration.ConstantPoolName);",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 60395,
		"linenumber" : 424,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "LABELED_STATEMENT",
		"changecontent" : "nextConstructor",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 60395,
		"linenumber" : 424,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int c = constructors.length;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 60395,
		"linenumber" : 424,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int m = methods.length;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 60395,
		"linenumber" : 424,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "LABELED_STATEMENT",
		"changecontent" : "nextMethod",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 60395,
		"linenumber" : 424,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "((-- m) >= 0)",
		"parententity" : "LABELED_STATEMENT"
	},
	{
		"linetupleid" : 60395,
		"linenumber" : 424,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "((-- m) >= 0)]((-- c) >= 0)",
		"parententity" : "LABELED_STATEMENT"
	},
	{
		"linetupleid" : 60396,
		"linenumber" : 425,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "MethodBinding method = methods[m];]MethodBinding constructor = constructors[c];",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 60397,
		"linenumber" : 426,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "TypeBinding[] toMatch = method.parameters;]TypeBinding[] toMatch = constructor.parameters;",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 60398,
		"linenumber" : 430,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "CONTINUE_STATEMENT",
		"changecontent" : "nextConstructor",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 60398,
		"linenumber" : 430,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "CONTINUE_STATEMENT",
		"changecontent" : "nextMethod",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 60399,
		"linenumber" : 431,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "constructor;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 60399,
		"linenumber" : 431,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "method;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 60621,
		"linenumber" : 116,
		"changeype" : "PARAMETER_RENAMING",
		"changeentity" : "PARAMETER",
		"changecontent" : "offset]someOffset",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 60621,
		"linenumber" : 116,
		"changeype" : "PARAMETER_RENAMING",
		"changeentity" : "PARAMETER",
		"changecontent" : "length]someLength",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 60621,
		"linenumber" : 116,
		"changeype" : "PARAMETER_TYPE_CHANGE",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "offset: int]someOffset: int",
		"parententity" : "PARAMETER"
	},
	{
		"linetupleid" : 60621,
		"linenumber" : 116,
		"changeype" : "PARAMETER_TYPE_CHANGE",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "length: int]someLength: int",
		"parententity" : "PARAMETER"
	},
	{
		"linetupleid" : 60622,
		"linenumber" : 117,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "byte[] result = new byte[length];]byte[] result = new byte[someLength];",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 60623,
		"linenumber" : 118,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "System.arraycopy(buffer, (this.offset + offset), result, 0, length);]System.arraycopy(buffer, (this.offset + someOffset), result, 0, someLength);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 60652,
		"linenumber" : 301,
		"changeype" : "PARAMETER_RENAMING",
		"changeentity" : "PARAMETER",
		"changecontent" : "offset]someOffset",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 60652,
		"linenumber" : 301,
		"changeype" : "PARAMETER_TYPE_CHANGE",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "offset: int]someOffset: int",
		"parententity" : "PARAMETER"
	},
	{
		"linetupleid" : 60653,
		"linenumber" : 302,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "buffer[(this.offset + offset)] = (byte) n;]buffer[(this.offset + someOffset)] = (byte) n;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 60686,
		"linenumber" : 50,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "((byteLen = field.getUInt2(offset)) != 0)]((byteLen = field.getUInt2(off)) != 0)",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 60687,
		"linenumber" : 51,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "char[] tempWord = field.getUTF(offset);]char[] tempWord = field.getUTF(off);",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 60688,
		"linenumber" : 52,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "offset += (byteLen + 2);]off += (byteLen + 2);",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 60727,
		"linenumber" : 342,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "(this.thread != null)](this.processingThread != null)",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 60873,
		"linenumber" : 96,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "(((-- index) > 0) && (returnType == methods[index].returnType))](((-- index) > 0) && areTypesEqual(returnType, methods[index].returnType))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 61121,
		"linenumber" : 275,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "(! ((statements[i] instanceof Case) || (statements[i] instanceof DefaultCase)))](! ((statements[i] instanceof CaseStatement) || (statements[i] instanceof DefaultCaseStatement)))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 61122,
		"linenumber" : 277,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((statements[i] instanceof Expression) || (statements[i] instanceof Break))]((statements[i] instanceof Expression) || (statements[i] instanceof BreakStatement))",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 61171,
		"linenumber" : 275,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "(! ((statements[i] instanceof CaseStatement) || (statements[i] instanceof DefaultCaseStatement)))](! (statements[i] instanceof CaseStatement))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 61327,
		"linenumber" : 24,
		"changeype" : "PARENT_INTERFACE_INSERT",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "SuffixConstants",
		"parententity" : "SUPER_INTERFACE_TYPES"
	},
	{
		"linetupleid" : 61810,
		"linenumber" : 65,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new BuildException(Messages.getString(\"ant.jdtadapter.error.cannotFindJDTCompiler\"));]new BuildException(Util.getString(\"ant.jdtadapter.error.cannotFindJDTCompiler\"));",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 61881,
		"linenumber" : 31,
		"changeype" : "ATTRIBUTE_TYPE_CHANGE",
		"changeentity" : "ARRAY_TYPE",
		"changecontent" : "IJavaElement]JavaElement",
		"parententity" : "FIELD"
	},
	{
		"linetupleid" : 61887,
		"linenumber" : 147,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.imports = new ISourceImport[importDeclarations.length];]this.imports = new ISourceImport[length];",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 61961,
		"linenumber" : 449,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "c.insets = new Insets(((y == 0) ? GAP : 0), ((x == 0) ? GAP : 0), GAP, GAP);]c.insets = new Insets(((y == 0) ? 10 : 0), ((x == 0) ? 10 : GAP), GAP, GAP);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 62034,
		"linenumber" : 486,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "DO_STATEMENT",
		"changecontent" : "(this.scanner.currentPosition <= sourceEnd)](this.scanner.currentPosition < sourceEnd)",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 62040,
		"linenumber" : 60,
		"changeype" : "PARAMETER_ORDERING_CHANGE",
		"changeentity" : "PARAMETER",
		"changecontent" : "kind",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 62110,
		"linenumber" : 59,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "IProblemRequestor problemRequestor = (IProblemRequestor) JavaModelManager.getJavaModelManager().getInfo(workingCopy);]IProblemRequestor problemRequestor = (IProblemRequestor) workingCopy.getPerWorkingCopyInfo();",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 62347,
		"linenumber" : 81,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(IPackageFragment) parent.getCompilationUnit(getName());]getCompilationUnit((IPackageFragment) parent, DefaultWorkingCopyOwner.PRIMARY);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 62381,
		"linenumber" : 67,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.typeHierarchy = new TypeHierarchy(element, scope, computeSubtypes, copies);]this.typeHierarchy = new TypeHierarchy(element, copies, scope, computeSubtypes);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 62383,
		"linenumber" : 174,
		"changeype" : "PARAMETER_ORDERING_CHANGE",
		"changeentity" : "PARAMETER",
		"changecontent" : "workingCopies",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 62384,
		"linenumber" : 175,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "this(type, SearchEngine.createJavaSearchScope(new IJavaElement[]{project}), computeSubtypes, workingCopies);]this(type, workingCopies, SearchEngine.createJavaSearchScope(new IJavaElement[]{project}), computeSubtypes);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 62402,
		"linenumber" : 987,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "ICompilationUnit[] primaryWCs = (addPrimary ? getWorkingCopies(DefaultWorkingCopyOwner.PRIMARY, false) : NoWorkingCopy);]ICompilationUnit[] primaryWCs = ((addPrimary && (owner != DefaultWorkingCopyOwner.PRIMARY)) ? getWorkingCopies(DefaultWorkingCopyOwner.PRIMARY, false) : NoWorkingCopy);",
		"parententity" : "SYNCHRONIZED_STATEMENT"
	},
	{
		"linetupleid" : 62413,
		"linenumber" : 229,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "print(0, new StringBuffer(30)).toString();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 62413,
		"linenumber" : 244,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "toString(0);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 62600,
		"linenumber" : 72,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new int[2][0];]new int[3][0];",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 62717,
		"linenumber" : 1049,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new CoreException(new Status(Status.ERROR, JavaCore.PLUGIN_ID, (- 1), Util.bind(\"status.IOException\"), e));]new CoreException(new Status(IStatus.ERROR, JavaCore.PLUGIN_ID, (- 1), Util.bind(\"status.IOException\"), e));",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 62741,
		"linenumber" : 44,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "modifiers &= (~ org.eclipse.jdt.internal.compiler.lookup.CompilerModifiers.AccInterface);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 62741,
		"linenumber" : 46,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "modifiers &= (~ IConstants.AccInterface);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 62742,
		"linenumber" : 45,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "modifiers &= org.eclipse.jdt.internal.compiler.lookup.CompilerModifiers.AccJustFlag;]modifiers &= CompilerModifiers.AccJustFlag;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 62783,
		"linenumber" : 835,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "resource = workingCopy.getOriginalElement().getResource();]resource = workingCopy.getResource();",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 62786,
		"linenumber" : 303,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((! type.isBinary()) && ((original = (IType) type.getCompilationUnit().getOriginal(type)) != null))]((! type.isBinary()) && ((original = (IType) type.getPrimaryElement()) != null))",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 62855,
		"linenumber" : 519,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "System.out.println(((\"Time in result collector: \" + (MatchLocator) matchLocator.resultCollectorTime) + \"ms\"));]System.out.println(((\"Time in result collector: \" + matchLocator.resultCollectorTime) + \"ms\"));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 62954,
		"linenumber" : 27,
		"changeype" : "ADDITIONAL_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "org.eclipse.jdt.internal.core.search.matching.OrPattern.patterns : SearchPattern[]",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 62954,
		"linenumber" : 28,
		"changeype" : "REMOVED_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "org.eclipse.jdt.internal.core.search.matching.OrPattern.leftPattern : SearchPattern",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 62955,
		"linenumber" : 28,
		"changeype" : "ADDITIONAL_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "org.eclipse.jdt.internal.core.search.matching.OrPattern.bestMatch : SearchPattern",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 62955,
		"linenumber" : 29,
		"changeype" : "REMOVED_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "org.eclipse.jdt.internal.core.search.matching.OrPattern.rightPattern : SearchPattern",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 62957,
		"linenumber" : 22,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "protected",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 63091,
		"linenumber" : 33,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "this(null);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 63091,
		"linenumber" : 33,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "this((CompilationResult) null);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 63105,
		"linenumber" : 147,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(ASTNode) (TypeDeclaration) unit.types().get(typeIndex);](ASTNode) unit.types().get(typeIndex);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 63107,
		"linenumber" : 289,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((allRemovedRoots = manager.deltaProcessor.removedRoots) != null)]((allRemovedRoots = manager.getDeltaProcessor().removedRoots) != null)",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 63114,
		"linenumber" : 1528,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(this.deltaProcessor.indexManager != null)](this.indexManager != null)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 63115,
		"linenumber" : 1529,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "this.deltaProcessor.indexManager.shutdown();]this.indexManager.shutdown();",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 63118,
		"linenumber" : 189,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "JavaModelManager.getJavaModelManager().deltaProcessor.reconcileDeltas.remove(workingCopy);]JavaModelManager.getJavaModelManager().getDeltaProcessor().reconcileDeltas.remove(workingCopy);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 63245,
		"linenumber" : 105,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_STATEMENT",
		"changecontent" : "classOrInterface]this.classOrInterface",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 63293,
		"linenumber" : 208,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((this.resolvedType = (receiverType = (SingleTypeReference) type.resolveTypeEnclosing(scope, (ReferenceBinding) enclosingInstanceType))) == null)]((receiverType = (SingleTypeReference) type.resolveTypeEnclosing(scope, (ReferenceBinding) enclosingInstanceType)) == null)",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 63496,
		"linenumber" : 104,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "IJavaProject p = this.createJavaProject(\"P1\", new String[]{}, new String[]{Util.getJavaClassLib()}, \"\");]IJavaProject p = this.createJavaProject(\"P1\", new String[]{}, Util.getJavaClassLibs(), \"\");",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 63626,
		"linenumber" : 171,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "(JavaElementDelta) existingChild.resourceDeltas = resDeltas;]existingChild.resourceDeltas = resDeltas;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 63627,
		"linenumber" : 172,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "(JavaElementDelta) existingChild.resourceDeltasCounter = child.resourceDeltasCounter;]existingChild.resourceDeltasCounter = child.resourceDeltasCounter;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 63639,
		"linenumber" : 333,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "preserveEmptyLines((count + 1));]preserveEmptyLines((count - 1));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 63712,
		"linenumber" : 56,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Enumeration e = zipFile.entries();]Enumeration e = this.zipFile.entries();",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 63745,
		"linenumber" : 101,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int max = classpaths.length;]int max = this.classpaths.length;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 63746,
		"linenumber" : 102,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "classpaths[i].reset();]this.classpaths[i].reset();",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 63789,
		"linenumber" : 171,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(types[(typeCount - 1)].typeDeclaration.declarationSourceEnd == 0)](this.types[(this.typeCount - 1)].typeDeclaration.declarationSourceEnd == 0)",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 63790,
		"linenumber" : 172,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "types[(typeCount - 1)].typeDeclaration.declarationSourceEnd = unitDeclaration.sourceEnd;]this.types[(this.typeCount - 1)].typeDeclaration.declarationSourceEnd = this.unitDeclaration.sourceEnd;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 63791,
		"linenumber" : 173,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "types[(typeCount - 1)].typeDeclaration.bodyEnd = unitDeclaration.sourceEnd;]this.types[(this.typeCount - 1)].typeDeclaration.bodyEnd = this.unitDeclaration.sourceEnd;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 63975,
		"linenumber" : 1167,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "err.println(Main.bind(\"configure.incorrectClasspath\", classpaths[i]));]this.err.println(Main.bind(\"configure.incorrectClasspath\", this.classpaths[i]));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 63976,
		"linenumber" : 1172,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(destinationPath == null)](this.destinationPath == null)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 63977,
		"linenumber" : 1173,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "generatePackagesStructure = false;]this.generatePackagesStructure = false;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 63978,
		"linenumber" : 1174,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "\"none\".equals(destinationPath)]\"none\".equals(this.destinationPath)",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 63979,
		"linenumber" : 1175,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "destinationPath = null;]this.destinationPath = null;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 64024,
		"linenumber" : 1333,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new InvalidInputException(Main.bind(\"unit.more\", filenames[i]));]new InvalidInputException(Main.bind(\"unit.more\", this.filenames[i]));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 64171,
		"linenumber" : 237,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int result = OperatorSignatures[tableId][((expressionId << 4) + expressionId)];]int operatorSignature = OperatorSignatures[tableId][((expressionTypeId << 4) + expressionTypeId)];",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 64172,
		"linenumber" : 238,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.expression.implicitConversion = (result >>> 12);]this.expression.implicitConversion = (operatorSignature >>> 12);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 64173,
		"linenumber" : 239,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.bits |= (result & 0xF);]this.bits |= (operatorSignature & 0xF);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 64174,
		"linenumber" : 240,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_STATEMENT",
		"changecontent" : "(result & 0xF)](operatorSignature & 0xF)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 64268,
		"linenumber" : 697,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "TypeDeclaration typeDecl = findDeclarationOfType(typeHandle, parsedUnit);]TypeDeclaration typeDecl = new AstNodeFinder(parsedUnit).findType(typeHandle);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 64337,
		"linenumber" : 413,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((manager.javaProjectsCache == null) ? this.getJavaProjects() : manager.javaProjectsCache);]((manager.deltaState.modelProjectsCache == null) ? this.getJavaProjects() : manager.deltaState.modelProjectsCache);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 64843,
		"linenumber" : 1402,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "report(typeDeclaration.sourceStart, typeDeclaration.sourceEnd, ((parent == null) ? createTypeHandle(typeDeclaration.name) : ((parent instanceof IType) ? createTypeHandle((IType) parent, typeDeclaration.name) : parent)), accuracy);]report(typeDeclaration.sourceStart, typeDeclaration.sourceEnd, ((parent == null) ? createTypeHandle(typeDeclaration.name) : ((parent instanceof IType) ? (IType) parent.getType(new String(typeDeclaration.name)) : parent)), accuracy);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 64927,
		"linenumber" : 181,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "ICompilationUnit[] compilationUnits;]org.eclipse.jdt.core.ICompilationUnit[] closedCUs;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 64928,
		"linenumber" : 182,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int unitsSize = units.size();]int closedUnitsSize = closedUnits.size();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 64929,
		"linenumber" : 183,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(unitsSize > 0)](closedUnitsSize > 0)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 64930,
		"linenumber" : 184,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "compilationUnits = new ICompilationUnit[unitsSize];]closedCUs = new org.eclipse.jdt.core.ICompilationUnit[closedUnitsSize];",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 64931,
		"linenumber" : 185,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "units.toArray(compilationUnits);]closedUnits.toArray(closedCUs);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 65028,
		"linenumber" : 1517,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "buffer.append(((this.focusType == null) ? \"<NONE>\" : this.focusType.getFullyQualifiedName()));]buffer.append(((this.focusType == null) ? \"<NONE>\" : (JavaElement) this.focusType.toStringWithAncestors()));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 65050,
		"linenumber" : 26,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 65314,
		"linenumber" : 161,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "this(FormattingPreferences.getDefault(), JavaCore.getOptions());]this(DefaultCodeFormatterOptions.getDefault(), JavaCore.getOptions());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 65344,
		"linenumber" : 329,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "final String source = javac.getSource();]String source = attributes.getSource();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 65436,
		"linenumber" : 110,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "codeFormatter = new CodeFormatter(options);",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 65436,
		"linenumber" : 110,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "codeFormatter = new CodeFormatter(options);]codeFormatter = new CompatibleCodeFormatter(options);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 65574,
		"linenumber" : 85,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "(this.index[0] < lineEnd)](this.index < this.lineEnd)",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 65577,
		"linenumber" : 146,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "char c = this.source[(this.index[0] ++)];]char c = this.source[(this.index ++)];",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 65578,
		"linenumber" : 149,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "this.index[0] ++;]this.index ++;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 65579,
		"linenumber" : 150,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "(this.source[this.index[0]] == \'u\')](this.source[this.index] == \'u\')",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 65579,
		"linenumber" : 150,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "this.index[0] ++;]this.index ++;",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 65580,
		"linenumber" : 150,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "(this.source[this.index[0]] == \'u\')](this.source[this.index] == \'u\')",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 65580,
		"linenumber" : 150,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "this.index[0] ++;]this.index ++;",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 65581,
		"linenumber" : 151,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! ((((((c1 = Character.getNumericValue(this.source[(this.index[0] ++)])) > 15) || (c1 < 0)) || (((c2 = Character.getNumericValue(this.source[(this.index[0] ++)])) > 15) || (c2 < 0))) || (((c3 = Character.getNumericValue(this.source[(this.index[0] ++)])) > 15) || (c3 < 0))) || (((c4 = Character.getNumericValue(this.source[(this.index[0] ++)])) > 15) || (c4 < 0))))](! ((((((c1 = Character.getNumericValue(this.source[(this.index ++)])) > 15) || (c1 < 0)) || (((c2 = Character.getNumericValue(this.source[(this.index ++)])) > 15) || (c2 < 0))) || (((c3 = Character.getNumericValue(this.source[(this.index ++)])) > 15) || (c3 < 0))) || (((c4 = Character.getNumericValue(this.source[(this.index ++)])) > 15) || (c4 < 0))))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 65752,
		"linenumber" : 442,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((fParent instanceof IMethod) || (fParent instanceof IInitializer));]((this.parent instanceof IMethod) || (this.parent instanceof IInitializer));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 65814,
		"linenumber" : 130,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "IType parent;]IType parentType;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 65815,
		"linenumber" : 131,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "((parent = current.getDeclaringType()) != null)]((parentType = current.getDeclaringType()) != null)",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 65816,
		"linenumber" : 132,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "current = parent;]current = parentType;",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 65963,
		"linenumber" : 927,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "report((int) (start >> 32), (int) (end & 0xFFFFF), element, accuracy);]report((int) (start >>> 32), (int) end, element, accuracy);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 66063,
		"linenumber" : 1083,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "CharOperation.arrayConcat(enclosingTypeNames(declaringClass), new char[][]{declaringClass.getElementName().toCharArray(), new char[]{\'1\'}});]CharOperation.arrayConcat(enclosingTypeNames(declaringClass), new char[][]{declaringClass.getElementName().toCharArray(), ONE_STAR});",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 66115,
		"linenumber" : 223,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int max = this.pattern.allSuperDeclaringTypeNames.length;]int max = this.allSuperDeclaringTypeNames.length;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 66116,
		"linenumber" : 224,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "CharOperation.equals(this.pattern.allSuperDeclaringTypeNames[i], compoundName)]CharOperation.equals(this.allSuperDeclaringTypeNames[i], compoundName)",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 66156,
		"linenumber" : 436,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int numJobs = ((jobEnd - jobStart) + 1);]int numJobs = ((this.jobEnd - this.jobStart) + 1);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 66159,
		"linenumber" : 439,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "buffer.append(i).append(((\" - job[\" + i) + \"]: \")).append(awaitingJobs[(jobStart + i)]).append(\'\\n\');]buffer.append(i).append(((\" - job[\" + i) + \"]: \")).append(this.awaitingJobs[(this.jobStart + i)]).append(\'\\n\');",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 66488,
		"linenumber" : 242,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "optionsMap.put(OPTION_ReportInvalidAnnotation, getSeverityString(InvalidAnnotation));]optionsMap.put(OPTION_ReportInvalidJavadoc, getSeverityString(InvalidJavadoc));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 66489,
		"linenumber" : 243,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "optionsMap.put(OPTION_ReportMissingAnnotation, (reportMissingAnnotation ? ENABLED : DISABLED));]optionsMap.put(OPTION_ReportMissingJavadoc, (reportMissingJavadoc ? ENABLED : DISABLED));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 67393,
		"linenumber" : 197,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new IllegalArgumentException(org.eclipse.jdt.internal.core.Util.bind(\"convention.unit.notJavaName\"));]new IllegalArgumentException(Util.bind(\"convention.unit.notJavaName\"));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 67438,
		"linenumber" : 57,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_STATEMENT",
		"changecontent" : "this.matchMode]matchMode()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 67439,
		"linenumber" : 68,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "buffer.append((this.isCaseSensitive ? \"case sensitive\" : \"case insensitive\"));]buffer.append((isCaseSensitive() ? \"case sensitive\" : \"case insensitive\"));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 67451,
		"linenumber" : 40,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.name = (isCaseSensitive ? name : CharOperation.toLowerCase(name));]this.name = (isCaseSensitive() ? name : CharOperation.toLowerCase(name));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 67645,
		"linenumber" : 101,
		"changeype" : "ADDITIONAL_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "org.eclipse.jdt.internal.core.search.matching.TypeDeclarationPattern.encodeIndexKey()",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 67645,
		"linenumber" : 148,
		"changeype" : "REMOVED_FUNCTIONALITY",
		"changeentity" : "METHOD",
		"changecontent" : "org.eclipse.jdt.internal.core.search.matching.TypeDeclarationPattern.indexEntryPrefix()",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 67717,
		"linenumber" : 49,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int max = ((results == null) ? 0 : results.length);]int max = ((paths == null) ? 0 : paths.length);",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 67718,
		"linenumber" : 50,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String documentPath = results[i].getPath();]String documentPath = paths[i];",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 67866,
		"linenumber" : 98,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(binding instanceof ProblemMethodBinding)](this.binding instanceof ProblemMethodBinding)",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 67867,
		"linenumber" : 99,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "MethodBinding closestMatch = (ProblemMethodBinding) binding.closestMatch;]MethodBinding closestMatch = (ProblemMethodBinding) this.binding.closestMatch;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 67872,
		"linenumber" : 128,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "output.append(\'#\').append(selector).append(\'(\');]output.append(\'#\').append(this.selector).append(\'(\');",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 67873,
		"linenumber" : 129,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(arguments != null)](this.arguments != null)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 67874,
		"linenumber" : 130,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < arguments.length)](i < this.arguments.length)",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 67889,
		"linenumber" : 313,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "arguments[i] = (JavadocArgumentExpression) astStack[(astPtr --)];]arguments[i] = (JavadocArgumentExpression) this.astStack[(this.astPtr --)];",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 68028,
		"linenumber" : 474,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "buf.append((\"\\n\\t- JDK compliance level: \" + versionFromJdkLevel(complianceLevel)));]buf.append((\"\\n\\t- JDK compliance level: \" + versionFromJdkLevel(this.complianceLevel)));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 68029,
		"linenumber" : 475,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "buf.append((\"\\n\\t- JDK source level: \" + versionFromJdkLevel(sourceLevel)));]buf.append((\"\\n\\t- JDK source level: \" + versionFromJdkLevel(this.sourceLevel)));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 68030,
		"linenumber" : 476,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "buf.append((\"\\n\\t- JDK target level: \" + versionFromJdkLevel(targetJDK)));]buf.append((\"\\n\\t- JDK target level: \" + versionFromJdkLevel(this.targetJDK)));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 68031,
		"linenumber" : 477,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "buf.append(\"\\n\\t- private constructor access: \").append((isPrivateConstructorAccessChangingVisibility ? \"extra argument\" : \"make default access\"));]buf.append(\"\\n\\t- private constructor access: \").append((this.isPrivateConstructorAccessChangingVisibility ? \"extra argument\" : \"make default access\"));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 68032,
		"linenumber" : 478,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "buf.append(\"\\n\\t- verbose : \").append((verbose ? \"ON\" : \"OFF\"));]buf.append(\"\\n\\t- verbose : \").append((this.verbose ? \"ON\" : \"OFF\"));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 68033,
		"linenumber" : 479,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "buf.append(\"\\n\\t- produce reference info : \").append((produceReferenceInfo ? \"ON\" : \"OFF\"));]buf.append(\"\\n\\t- produce reference info : \").append((this.produceReferenceInfo ? \"ON\" : \"OFF\"));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 68034,
		"linenumber" : 480,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "buf.append(\"\\n\\t- parse literal expressions as constants : \").append((parseLiteralExpressionsAsConstants ? \"ON\" : \"OFF\"));]buf.append(\"\\n\\t- parse literal expressions as constants : \").append((this.parseLiteralExpressionsAsConstants ? \"ON\" : \"OFF\"));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 68035,
		"linenumber" : 481,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "buf.append(\"\\n\\t- encoding : \").append(((defaultEncoding == null) ? \"<default>\" : defaultEncoding));]buf.append(\"\\n\\t- encoding : \").append(((this.defaultEncoding == null) ? \"<default>\" : this.defaultEncoding));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 68055,
		"linenumber" : 901,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "field.initialization.resolve((field.isStatic() ? staticInitializerScope : initializerScope));]field.initialization.resolve((field.isStatic() ? this.staticInitializerScope : this.initializerScope));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 68056,
		"linenumber" : 902,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "ignoreFurtherInvestigation = true;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 68056,
		"linenumber" : 902,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "ignoreFurtherInvestigation = true;]this.ignoreFurtherInvestigation = true;",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 68193,
		"linenumber" : 541,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "newElements.containsKey(handle)]this.newElements.containsKey(handle)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 68273,
		"linenumber" : 145,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! (binding = scope.getConstructor(allocatedType, argumentTypes, this)).isValidBinding())](! (this.binding = scope.getConstructor(allocatedType, argumentTypes, this)).isValidBinding())",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 68274,
		"linenumber" : 146,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((binding instanceof ProblemMethodBinding) && ((ProblemMethodBinding) binding.problemId() == NotVisible))]((this.binding instanceof ProblemMethodBinding) && ((ProblemMethodBinding) this.binding.problemId() == NotVisible))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 68409,
		"linenumber" : 253,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "writeUnsignedShort((CodeSnippetConstantPool) constantPool.literalIndexForJavaLangByteByteValue());]writeUnsignedShort((CodeSnippetConstantPool) this.constantPool.literalIndexForJavaLangByteByteValue());",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 68584,
		"linenumber" : 224,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "MethodBinding privateBinding = (((receiver instanceof CodeSnippetThisReference) && (CodeSnippetThisReference) receiver.isImplicit) ? localScope.getImplicitMethod((ReferenceBinding) delegateThis.type, selector, argumentTypes, this) : localScope.getMethod(delegateThis.type, selector, argumentTypes, this));]MethodBinding privateBinding = (((this.receiver instanceof CodeSnippetThisReference) && (CodeSnippetThisReference) this.receiver.isImplicit) ? localScope.getImplicitMethod((ReferenceBinding) this.delegateThis.type, this.selector, argumentTypes, this) : localScope.getMethod(this.delegateThis.type, this.selector, argumentTypes, this));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 68640,
		"linenumber" : 170,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(fr.receiver = expressionStack[expressionPtr]).isThis()](fr.receiver = this.expressionStack[this.expressionPtr]).isThis()",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 68664,
		"linenumber" : 336,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "identifierLengthStack[identifierLengthPtr] --;]this.identifierLengthStack[this.identifierLengthPtr] --;",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 68751,
		"linenumber" : 283,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_STATEMENT",
		"changecontent" : "(bits & RestrictiveFlagMASK)](this.bits & RestrictiveFlagMASK)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 68801,
		"linenumber" : 486,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "receiverType = (ClassScope) scope.referenceContext.binding;]this.receiverType = (ClassScope) scope.referenceContext.binding;",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 68812,
		"linenumber" : 603,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.codegenBinding = (binding = fieldBinding);]this.codegenBinding = (this.binding = fieldBinding);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 68946,
		"linenumber" : 83,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(IBuffer) source;](IBuffer) this.source;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 68951,
		"linenumber" : 104,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SYNCHRONIZED_STATEMENT",
		"changecontent" : "openBuffers]this.openBuffers",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 68952,
		"linenumber" : 105,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "openBuffers.shrink();]this.openBuffers.shrink();",
		"parententity" : "SYNCHRONIZED_STATEMENT"
	},
	{
		"linetupleid" : 68953,
		"linenumber" : 106,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "openBuffers.elements();]this.openBuffers.elements();",
		"parententity" : "SYNCHRONIZED_STATEMENT"
	},
	{
		"linetupleid" : 69090,
		"linenumber" : 28,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(OR_PATTERN, Math.max(leftPattern.matchRule, rightPattern.matchRule));]super(OR_PATTERN, Math.max(leftPattern.getMatchRule(), rightPattern.getMatchRule()));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 69168,
		"linenumber" : 24,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "this(matchRule);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 69168,
		"linenumber" : 24,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(PKG_REF_PATTERN, matchRule);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 69317,
		"linenumber" : 415,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "end = ((end < this.lineEnd) ? end : (this.lineEnd - 1));]end = ((end < this.lineEnd) ? end : this.lineEnd);",
		"parententity" : "CATCH_CLAUSE"
	},
	{
		"linetupleid" : 69434,
		"linenumber" : 108,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "IPackageFragment[] pkgs = project.newNameLookup((WorkingCopyOwner) null).findPackageFragments(\"p1\", false);]IPackageFragment[] pkgs = getNameLookup(project).findPackageFragments(\"p1\", false);",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 69435,
		"linenumber" : 116,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "pkgs = project.newNameLookup((WorkingCopyOwner) null).findPackageFragments(\"p2\", false);]pkgs = getNameLookup(project).findPackageFragments(\"p2\", false);",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 69516,
		"linenumber" : 211,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "CompilationUnitResolver compilationUnitVisitor = new CompilationUnitResolver(project.newSearchableNameEnvironment(owner), getHandlingPolicy(), project.getOptions(true), getRequestor(), new DefaultProblemFactory());]CompilationUnitResolver compilationUnitVisitor = new CompilationUnitResolver(getNameEnvironment(project, owner, monitor), getHandlingPolicy(), project.getOptions(true), getRequestor(), getProblemFactory(monitor));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 69701,
		"linenumber" : 115,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new org.eclipse.jdt.internal.formatter.CodeFormatter(options);]new org.eclipse.jdt.internal.formatter.old.CodeFormatter(options);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 69703,
		"linenumber" : 461,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int size = (BASE_NODE_SIZE + (4 * 4));]int size = (BASE_NODE_SIZE + (7 * 4));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 69718,
		"linenumber" : 52,
		"changeype" : "ATTRIBUTE_RENAMING",
		"changeentity" : "FIELD",
		"changecontent" : "org.eclipse.jdt.core.dom.Javadoc.fragments : ASTNode.NodeList",
		"parententity" : "FIELD"
	},
	{
		"linetupleid" : 69719,
		"linenumber" : 90,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "result.fragments().addAll(ASTNode.copySubtrees(target, fragments()));]result.tags().addAll(ASTNode.copySubtrees(target, tags()));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 69970,
		"linenumber" : 121,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_STATEMENT",
		"changecontent" : "(problemFieldBinding.problemId() & IProblem.IgnoreCategoriesMask)]problemFieldBinding.problemId()",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 69975,
		"linenumber" : 164,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i <= lastUnitIndex)](i <= this.lastUnitIndex)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 69975,
		"linenumber" : 164,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int i = (lastCompletedUnitIndex + 1);]int i = (this.lastCompletedUnitIndex + 1);",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 69976,
		"linenumber" : 165,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "units[i].scope.checkAndSetImports();](this.unitBeingCompleted = this.units[i]).scope.checkAndSetImports();",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 70373,
		"linenumber" : 506,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(((((memSize() + ((getJavadoc() == null) ? 0 : getJavadoc().treeSize())) + ((typeName == null) ? 0 : getName().treeSize())) + ((optionalSuperclassName == null) ? 0 : getSuperclass().treeSize())) + superInterfaceNames.listSize()) + bodyDeclarations.listSize());](((((((((memSize() + ((this.optionalDocComment == null) ? 0 : getJavadoc().treeSize())) + ((this.modifiers == null) ? 0 : this.modifiers.listSize())) + ((this.typeName == null) ? 0 : getName().treeSize())) + ((this.typeParameters == null) ? 0 : this.typeParameters.listSize())) + ((this.optionalSuperclassName == null) ? 0 : getSuperclass().treeSize())) + ((this.optionalSuperclassType == null) ? 0 : getSuperclassType().treeSize())) + ((this.superInterfaceNames == null) ? 0 : this.superInterfaceNames.listSize())) + ((this.superInterfaceTypes == null) ? 0 : this.superInterfaceTypes.listSize())) + this.bodyDeclarations.listSize());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 71037,
		"linenumber" : 692,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(this.optionalCommentTable != null)](this.optionalCommentList != null)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 71038,
		"linenumber" : 693,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < this.optionalCommentTable.length)](i < this.optionalCommentList.size())",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 71039,
		"linenumber" : 694,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Comment comment = this.optionalCommentTable[i];]Comment comment = (Comment) this.optionalCommentList.get(i);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 71104,
		"linenumber" : 23,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 71136,
		"linenumber" : 118,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "withoutUnicodePtr = ((currentPosition - unicodeSize) - startPosition);]this.withoutUnicodePtr = ((this.currentPosition - unicodeSize) - this.startPosition);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 71292,
		"linenumber" : 287,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "((j < thrownExceptionLength) && (exceptionBinding != md.thrownExceptions[j].resolvedType))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 71292,
		"linenumber" : 288,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "((j < thrownExceptionLength) && (diff = (exceptionBinding != md.thrownExceptions[(j ++)].resolvedType)))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 71293,
		"linenumber" : 289,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! diff)](j < thrownExceptionLength)",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 71294,
		"linenumber" : 290,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "methScope.problemReporter().javadocMissingThrowsTag(md.thrownExceptions[(j - 1)], md.binding.modifiers);]methScope.problemReporter().javadocMissingThrowsTag(md.thrownExceptions[j], md.binding.modifiers);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 71932,
		"linenumber" : 223,
		"changeype" : "REMOVING_METHOD_OVERRIDABILITY",
		"changeentity" : "MODIFIER",
		"changecontent" : "final",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 71932,
		"linenumber" : 223,
		"changeype" : "METHOD_RENAMING",
		"changeentity" : "METHOD",
		"changecontent" : "org.eclipse.jdt.core.dom.VariableDeclarationExpression.getNodeType()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 71932,
		"linenumber" : 223,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 72164,
		"linenumber" : 1508,
		"changeype" : "UNCLASSIFIED_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "static",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 72165,
		"linenumber" : 1509,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int length = Variables.size();]int length = this.variables.size();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 72254,
		"linenumber" : 481,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "buffer.append(superinterface).append(Util.bind(\"disassembler.comma\"));]buffer.append(superinterface).append(Util.bind(\"disassembler.comma\")).append(Util.bind(\"disassembler.space\"));",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 72366,
		"linenumber" : 284,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < fEvents.size())](i < this.events.size())",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 72367,
		"linenumber" : 285,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "EventHolder curr = (EventHolder) fEvents.get(i);]EventHolder curr = (EventHolder) this.events.get(i);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 72433,
		"linenumber" : 1032,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "System.out.println((\"\\tDocument path: \" + match.getDocumentPath()));]System.out.println((\"\\tResource: \" + match.getResource()));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 72434,
		"linenumber" : 1033,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "System.out.println(((((\"\\tPositions: [\" + match.getSourceStart()) + \", \") + match.getSourceEnd()) + \"]\"));]System.out.println(((((\"\\tPositions: [offset=\" + match.getOffset()) + \", length=\") + match.getLength()) + \"]\"));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 72435,
		"linenumber" : 1034,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "System.out.println((\"\\tJava element: \" + match.getDescriptiveLocation()));]System.out.println((\"\\tJava element: \" + (JavaElement) match.getElement().toStringWithAncestors()));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 72465,
		"linenumber" : 703,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(searchDocument instanceof JavaSearchParticipant.WorkingCopyDocument)",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 72465,
		"linenumber" : 703,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(searchDocument instanceof JavaSearchParticipant.WorkingCopyDocument)](document instanceof InternalSearchPattern.WorkingCopyDocument)",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 72465,
		"linenumber" : 714,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(searchDocument instanceof InternalSearchPattern.WorkingCopyDocument)",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 72466,
		"linenumber" : 704,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "workingCopy = (JavaSearchParticipant.WorkingCopyDocument) searchDocument.workingCopy;]workingCopy = (InternalSearchPattern.WorkingCopyDocument) searchDocument.workingCopy;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 72478,
		"linenumber" : 362,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SYNCHRONIZED_STATEMENT",
		"changecontent" : "this.ast]this",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 72616,
		"linenumber" : 793,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 72620,
		"linenumber" : 827,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "protected",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 72715,
		"linenumber" : 129,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "boolean isPolymorphicSearch = ((this.pattern == null) ? false : this.pattern.isPolymorphicSearch());]boolean isPolymorphicSearch = ((this.pattern == null) ? false : MatchLocator.isPolymorphicSearch(this.pattern));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 72736,
		"linenumber" : 671,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(document instanceof InternalSearchPattern.WorkingCopyDocument)](document instanceof WorkingCopyDocument)",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 72737,
		"linenumber" : 672,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "copies.add((InternalSearchPattern.WorkingCopyDocument) document.workingCopy);]copies.add((WorkingCopyDocument) document.workingCopy);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 72875,
		"linenumber" : 1181,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "CharOperation.arrayConcat(enclosingTypeNames(declaringClass), new char[][]{declaringClass.getElementName().toCharArray(), ONE_STAR});]CharOperation.arrayConcat(enclosingTypeNames(declaringClass), new char[][]{declaringClass.getElementName().toCharArray(), IIndexConstants.ONE_STAR});",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 73144,
		"linenumber" : 115,
		"changeype" : "ADDING_METHOD_OVERRIDABILITY",
		"changeentity" : "MODIFIER",
		"changecontent" : "final",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 73144,
		"linenumber" : 120,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "protected",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 73502,
		"linenumber" : 360,
		"changeype" : "ADDING_METHOD_OVERRIDABILITY",
		"changeentity" : "MODIFIER",
		"changecontent" : "final",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 73503,
		"linenumber" : 101,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "buffer.append(fieldDeclaration.print((tab + 1), buffer));]fieldDeclaration.print((tab + 1), buffer);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 73520,
		"linenumber" : 73,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "begin = ((startPosition >= length) ? (length - 1) : startPosition);]begin = ((this.startPosition >= length) ? (length - 1) : this.startPosition);",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 73523,
		"linenumber" : 92,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i <= ((endPosition >= length) ? (length - 1) : endPosition))](i <= ((this.endPosition >= length) ? (length - 1) : this.endPosition))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 73523,
		"linenumber" : 92,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int i = startPosition;]int i = this.startPosition;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 73652,
		"linenumber" : 89,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "x = ((((x & 0xF) << 12) + ((this.reference[(readOffset ++)] & 0x3F) << 6)) + (this.reference[(readOffset ++)] & 0x3F));]x = ((((x & 0xF) << 12) | ((this.reference[(readOffset ++)] & 0x3F) << 6)) | (this.reference[(readOffset ++)] & 0x3F));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 73816,
		"linenumber" : 112,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new JavaModelException(new JavaModelStatus(IJavaModelStatusConstants.INDEX_OUT_OF_BOUNDS));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 73816,
		"linenumber" : 112,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new IllegalArgumentException(((((\"Completion position \" + position) + \" is not located in supplied source range (0, \") + buffer.getLength()) + \")\"));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 73856,
		"linenumber" : 1341,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < missingTypes.size())](i < this.missingTypes.size())",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 73943,
		"linenumber" : 121,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.lineEnd = ((this.linePtr == this.lastLinePtr) ? this.endComment : javadocStart);]this.lineEnd = ((this.linePtr == this.lastLinePtr) ? this.endComment : getLineEnd(this.linePtr));",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 73972,
		"linenumber" : 355,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "(scanner.currentPosition != commentStart)](this.scanner.currentPosition != commentStart)",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 73973,
		"linenumber" : 356,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(scanner.getNextToken() != TerminalTokens.TokenNameWHITESPACE)](this.scanner.getNextToken() != TerminalTokens.TokenNameWHITESPACE)",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 73974,
		"linenumber" : 357,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "lastTokenEnd = scanner.getCurrentTokenEndPosition();]lastTokenEnd = this.scanner.getCurrentTokenEndPosition();",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 73993,
		"linenumber" : 46,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Iterator iter = jInfo.entryNames.iterator();]Iterator iter = entryNames.iterator();",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 74414,
		"linenumber" : 371,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "this.memberTypes[i] = (UnresolvedReferenceBinding) memberType.resolve(environment);]this.memberTypes[i] = resolveType(memberType, this.environment, false);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 74521,
		"linenumber" : 702,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < m)",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 74521,
		"linenumber" : 726,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(j > i)",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 74521,
		"linenumber" : 726,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int j = (length - 1);",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 74521,
		"linenumber" : 726,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "j --;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 74522,
		"linenumber" : 703,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "MethodBinding method2 = methods[i];",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 74522,
		"linenumber" : 703,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "MethodBinding method2 = methods[i];]MethodBinding method2 = methods[j];",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 74613,
		"linenumber" : 147,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_STATEMENT",
		"changecontent" : "this.binding.returnType.id]this.codegenBinding.returnType.id",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 74710,
		"linenumber" : 1108,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new JavaModelStatus(IJavaModelStatusConstants.INVALID_CLASSPATH, Util.bind(\"classpath.unboundSourceAttachment\", new String[]{sourceAttachment.toString(), path.makeRelative().toString(), projectName}));]new JavaModelStatus(IJavaModelStatusConstants.INVALID_CLASSPATH, Util.bind(\"classpath.unboundSourceAttachment\", new String[]{sourceAttachment.toString(), path.toOSString(), projectName}));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 74799,
		"linenumber" : 595,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.constant = (((bits & FIELD) != 0) ? FieldReference.getConstantFor((FieldBinding) binding, this, false, scope) : (VariableBinding) binding.constant);]this.constant = (((bits & FIELD) != 0) ? FieldReference.getConstantFor((FieldBinding) binding, this, false, scope) : (VariableBinding) binding.constant());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 74882,
		"linenumber" : 424,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "(JavaElement) newElement.occurrenceCount ++;](SourceRefElement) newElement.occurrenceCount ++;",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 74988,
		"linenumber" : 35,
		"changeype" : "PARAMETER_DELETE",
		"changeentity" : "PARAMETER",
		"changecontent" : "name",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 74988,
		"linenumber" : 36,
		"changeype" : "PARAMETER_INSERT",
		"changeentity" : "PARAMETER",
		"changecontent" : "names",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 74989,
		"linenumber" : 36,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(root, name);]super(root, names);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 75132,
		"linenumber" : 19,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 75132,
		"linenumber" : 19,
		"changeype" : "ADDING_CLASS_DERIVABILITY",
		"changeentity" : "MODIFIER",
		"changecontent" : "final",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 75219,
		"linenumber" : 58,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Object batchCompilerInstance = batchCompilerConstructor.newInstance(new Object[]{new PrintWriter(System.out), new PrintWriter(System.err), new Boolean(true)});]Object batchCompilerInstance = batchCompilerConstructor.newInstance(new Object[]{new PrintWriter(System.out), new PrintWriter(System.err), Boolean.valueOf(true)});",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 75447,
		"linenumber" : 1216,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "this.result.append(\' \');]this.result.append(\';\');",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 75454,
		"linenumber" : 21,
		"changeype" : "ADDITIONAL_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "org.eclipse.jdt.internal.core.TypeParameter.NO_TYPE_PARAMETERS : ITypeParameter[]",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 75454,
		"linenumber" : 21,
		"changeype" : "REMOVED_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "org.eclipse.jdt.internal.core.TypeParameter.ENABLED : boolean",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 75599,
		"linenumber" : 177,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "key = new char[]{ONE_STAR[0], SEPARATOR, this.classOrInterface};]key = new char[]{ONE_STAR[0], SEPARATOR, (isCaseSensitive() ? this.classOrInterface : Character.toLowerCase(this.classOrInterface))};",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 75616,
		"linenumber" : 819,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "this.resolvedType = convertToRawType(type, scope);]this.resolvedType = scope.convertToRawType(type);",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 75628,
		"linenumber" : 255,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "String[] newNames = Util.arrayConcat(pkgName, memberName.intern());]String[] newNames = Util.arrayConcat(pkgName, manager.intern(memberName));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 75631,
		"linenumber" : 550,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "DO_STATEMENT",
		"changecontent" : "((currentType = currentType.superclass()) != null)](((currentType = currentType.superclass()) != null) && ((currentType.tagBits & HasNoMemberTypes) == 0))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 75975,
		"linenumber" : 51,
		"changeype" : "PARAMETER_DELETE",
		"changeentity" : "PARAMETER",
		"changecontent" : "binding1",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 75975,
		"linenumber" : 51,
		"changeype" : "PARAMETER_DELETE",
		"changeentity" : "PARAMETER",
		"changecontent" : "binding2",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 75975,
		"linenumber" : 51,
		"changeype" : "PARAMETER_ORDERING_CHANGE",
		"changeentity" : "PARAMETER",
		"changecontent" : "id",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 75975,
		"linenumber" : 58,
		"changeype" : "PARAMETER_INSERT",
		"changeentity" : "PARAMETER",
		"changecontent" : "argument",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 75976,
		"linenumber" : 52,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "bind(id, new String[]{binding1, binding2});]bind(id, new String[]{argument1, argument2});",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 76370,
		"linenumber" : 211,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new BinaryType((JavaElement) this.getPackageFragment().getClassFile(enclosingClassFileName), enclosingName.substring((enclosingName.lastIndexOf(\'$\') + 1)));]new BinaryType((JavaElement) this.getPackageFragment().getClassFile(enclosingClassFileName), Util.localTypeName(enclosingName, enclosingName.lastIndexOf(\'$\'), enclosingName.length()));",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 76437,
		"linenumber" : 192,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new ClasspathEntry(this.getContentKind(), this.getEntryKind(), this.getPath(), ClasspathEntry.concatPatterns(referringEntry.getInclusionPatterns(), this.getInclusionPatterns()), ClasspathEntry.concatPatterns(referringEntry.getExclusionPatterns(), this.getExclusionPatterns()), this.getOutputLocation(), this.getSourceAttachmentPath(), this.getSourceAttachmentRootPath(), (referringEntry.isExported() || this.isExported));]new ClasspathEntry(this.getContentKind(), this.getEntryKind(), this.getPath(), ClasspathEntry.concatPatterns(referringEntry.getInclusionPatterns(), this.getInclusionPatterns()), ClasspathEntry.concatPatterns(referringEntry.getExclusionPatterns(), this.getExclusionPatterns()), this.getSourceAttachmentPath(), this.getSourceAttachmentRootPath(), this.getOutputLocation(), (referringEntry.isExported() || this.isExported));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 76649,
		"linenumber" : 773,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "VARIABLE]Binding.VARIABLE",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 76650,
		"linenumber" : 774,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "(TYPE | VARIABLE)](Binding.TYPE | Binding.VARIABLE)",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 76865,
		"linenumber" : 43,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(CharOperation.concat(OuterLocalPrefix, actualOuterLocalVariable.name), actualOuterLocalVariable.type, AccFinal, true);]super(CharOperation.concat(TypeConstants.SYNTHETIC_OUTER_LOCAL_PREFIX, actualOuterLocalVariable.name), actualOuterLocalVariable.type, AccFinal, true);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 76992,
		"linenumber" : 121,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "assertEquals(\"should have one class\", ((((\"element:XZX    completion:XZX    relevance:\" + (((R_DEFAULT + R_INTERESTING) + R_CASE) + R_UNQUALIFIED)) + \"\\n\") + \"element:XZXSuper    completion:XZXSuper    relevance:\") + ((((R_DEFAULT + R_INTERESTING) + R_CASE) + R_UNQUALIFIED) + R_EXACT_EXPECTED_TYPE)), requestor.getResults());]assertEquals(\"should have one class\", ((((\"element:XZX    completion:XZX    relevance:\" + ((((R_DEFAULT + R_INTERESTING) + R_CASE) + R_UNQUALIFIED) + R_NON_RESTRICTED)) + \"\\n\") + \"element:XZXSuper    completion:XZXSuper    relevance:\") + (((((R_DEFAULT + R_INTERESTING) + R_CASE) + R_UNQUALIFIED) + R_EXACT_EXPECTED_TYPE) + R_NON_RESTRICTED)), requestor.getResults());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 77540,
		"linenumber" : 119,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((((this.index == (- 1)) || (this.index >= (this.source.length - 1))) || (this.source[this.index] == \',\')) || (this.source[this.index] == \'(\'));](((((this.index == (- 1)) || (this.index >= (this.source.length - 1))) || ((currentChar = this.source[this.index]) == \',\')) || (currentChar == \'(\')) || (currentChar == \'<\'));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 77591,
		"linenumber" : 201,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "codeComplete(offset, new CompletionRequestorWrapper(requestor), workingCopyOwner);]codeComplete(offset, new org.eclipse.jdt.internal.codeassist.CompletionRequestorWrapper(requestor), workingCopyOwner);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 77959,
		"linenumber" : 222,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "DO_STATEMENT",
		"changecontent" : "((this.scanner.token != BindingKeyScanner.END) && (! this.scanner.isAtTypeParameterStart()))]((this.scanner.token != BindingKeyScanner.END) && (! this.scanner.isAtParametersStart()))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 78295,
		"linenumber" : 39,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "flowContext.recordUsingNullReference(scope, local, reference, FlowInfo.NON_NULL, flowInfo);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 78295,
		"linenumber" : 39,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "scope.problemReporter().localVariableCannotBeNull(local, reference);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 78504,
		"linenumber" : 1187,
		"changeype" : "STATEMENT_ORDERING_CHANGE",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "paramCount --;",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 78525,
		"linenumber" : 163,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "char[] uniqueKey = new char[((((declaringLength + 1) + nameLength) + ((signature == null) ? 0 : 1)) + signatureLength)];]char[] uniqueKey = new char[((declaringLength + 1) + nameLength)];",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 78546,
		"linenumber" : 82,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "extraPotentialInits[i] = otherInits.extraPotentialInits[(i ++)];",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 78546,
		"linenumber" : 82,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "extraPotentialInits[i] = otherInits.extraPotentialInits[(i ++)];]extraPotentialInits[i] = otherInits.extraPotentialInits[i];",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 78814,
		"linenumber" : 182,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_STATEMENT",
		"changecontent" : "binding.bindingType()]binding.kind()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 79351,
		"linenumber" : 115,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "((T_String << 4) + T_String)]((T_JavaLangString << 4) + T_JavaLangString)",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 79696,
		"linenumber" : 353,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "rule |= (refinedAccuracy & SearchMatch.RULE_MASK);]rule |= (refinedAccuracy & RULE_MASK);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 79697,
		"linenumber" : 354,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "refinedAccuracy = (refinedAccuracy & (~ SearchMatch.RULE_MASK));]refinedAccuracy = (refinedAccuracy & (~ RULE_MASK));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 79702,
		"linenumber" : 46,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "int var11:tab]int var11:var10",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 79909,
		"linenumber" : 26,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(originalField.name, (originalField.isStatic() ? originalField.type : parameterizedDeclaringClass.substitute(originalField.type)), originalField.modifiers, parameterizedDeclaringClass, null);]super(originalField.name, (originalField.isStatic() ? originalField.type : Scope.substitute(parameterizedDeclaringClass, originalField.type)), originalField.modifiers, parameterizedDeclaringClass, null);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 79912,
		"linenumber" : 79,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.returnType = this.substitute((ignoreRawTypeSubstitution ? originalMethod.returnType : rawType.substitute(originalMethod.returnType)));]this.returnType = Scope.substitute(this, (ignoreRawTypeSubstitution ? originalMethod.returnType : Scope.substitute(rawType, originalMethod.returnType)));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 79924,
		"linenumber" : 72,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((this.superclass.id != T_JavaLangObject) && (! argumentType.isCompatibleWith((hasSubstitution ? substitution.substitute(this.superclass) : this.superclass))))]((this.superclass.id != T_JavaLangObject) && (! argumentType.isCompatibleWith((hasSubstitution ? Scope.substitute(substitution, this.superclass) : this.superclass))))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 79968,
		"linenumber" : 319,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "new SearchBasicEngine(this.workingCopies).searchAllTypeNames(qualification, simpleName, SearchPattern.R_PREFIX_MATCH, IJavaSearchConstants.TYPE, this.searchScope, typeRequestor, CANCEL_IF_NOT_READY_TO_SEARCH, progressMonitor);]new BasicSearchEngine(this.workingCopies).searchAllTypeNames(qualification, simpleName, SearchPattern.R_PREFIX_MATCH, IJavaSearchConstants.TYPE, this.searchScope, typeRequestor, CANCEL_IF_NOT_READY_TO_SEARCH, progressMonitor);",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 80250,
		"linenumber" : 60,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.constant = NotAConstant;]constant = NotAConstant;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 80251,
		"linenumber" : 61,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(this.resolvedType != null)](resolvedType != null)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 80252,
		"linenumber" : 62,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(this.resolvedType.isValidBinding() ? this.resolvedType : null);](resolvedType.isValidBinding() ? resolvedType : null);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 80253,
		"linenumber" : 64,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.resolvedType = getTypeBinding(scope);]resolvedType = getTypeBinding(scope);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 80254,
		"linenumber" : 65,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(! this.resolvedType.isValidBinding())](! resolvedType.isValidBinding())",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 80255,
		"linenumber" : 66,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Binding binding = scope.getTypeOrPackage(this.tokens);]Binding binding = scope.getTypeOrPackage(tokens);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 80275,
		"linenumber" : 123,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(((methodBinding == null) && (methodBinding2 == null)) || (((CharOperation.equals(methodBinding.selector, methodBinding2.selector) && isEqual(methodBinding.returnType, methodBinding2.returnType, false)) && isEqual(methodBinding.parameters, methodBinding2.parameters, false)) && isEqual(methodBinding.thrownExceptions, methodBinding2.thrownExceptions, false)));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 80324,
		"linenumber" : 12,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Outer<String>.Inner<Integer>.InnerInner<Number> in = new Outer<String>().new Inner<Integer>().new InnerInner<Number>();]Outer<String>.Inner<Number> in = new Outer<String>().new Inner<Number>();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 80515,
		"linenumber" : 1481,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "stringBuffer.append(((((((\"(page witdh = \" + this.pageWidth) + \") - (useTab = \") + this.useTab) + \") - (tabSize = \") + this.tabSize) + \")\")).append(this.lineSeparator).append(((((((\"(line = \" + this.line) + \") - (column = \") + this.column) + \") - (identationLevel = \") + this.indentationLevel) + \")\")).append(this.lineSeparator).append(((((((\"(needSpace = \" + this.needSpace) + \") - (lastNumberOfNewLines = \") + this.lastNumberOfNewLines) + \") - (checkLineWrapping = \") + this.checkLineWrapping) + \")\")).append(this.lineSeparator).append(\"==================================================================================\").append(this.lineSeparator);]stringBuffer.append(((((((\"(page width = \" + this.pageWidth) + \") - (useTab = \") + this.useTab) + \") - (tabSize = \") + this.tabLength) + \")\")).append(this.lineSeparator).append(((((((\"(line = \" + this.line) + \") - (column = \") + this.column) + \") - (identationLevel = \") + this.indentationLevel) + \")\")).append(this.lineSeparator).append(((((((\"(needSpace = \" + this.needSpace) + \") - (lastNumberOfNewLines = \") + this.lastNumberOfNewLines) + \") - (checkLineWrapping = \") + this.checkLineWrapping) + \")\")).append(this.lineSeparator).append(\"==================================================================================\").append(this.lineSeparator);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 80770,
		"linenumber" : 586,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(match ? ACCURATE_MATCH : IMPOSSIBLE_MATCH);](matchPattern ? ACCURATE_MATCH : IMPOSSIBLE_MATCH);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 80784,
		"linenumber" : 51,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "((i < length) && (! isErasureMatch))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 80784,
		"linenumber" : 57,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < length)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 80785,
		"linenumber" : 52,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "isErasureMatch = true;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 80785,
		"linenumber" : 52,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(JavaSearchPattern) this.patterns[i].isErasureMatch",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 80785,
		"linenumber" : 56,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "matchCompatibility = 0;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 80836,
		"linenumber" : 136,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((paramLength != argLength) || ((arguments[minArgLength] != NullBinding) && (arguments[minArgLength].dimensions() == 0)))]((paramLength != argLength) || ((lastArgument != NullBinding) && ((lastArgument.dimensions() == 0) || (lastArgument.leafComponentType().isBaseType() != varargType.leafComponentType().isBaseType()))))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 80871,
		"linenumber" : 74,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_STATEMENT",
		"changecontent" : "(matchRule & JavaSearchPattern.MATCH_RULE_INDEX_MASK)](matchRule & MATCH_RULE_INDEX_MASK)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 81284,
		"linenumber" : 231,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "this.resolver.getMethodBinding((org.eclipse.jdt.internal.compiler.lookup.MethodBinding) declaringElement);]this.resolver.getMethodBinding((MethodBinding) declaringElement);",
		"parententity" : "BODY"
	},
	{
		"linetupleid" : 81369,
		"linenumber" : 425,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "marker.setAttributes(new String[]{IMarker.MESSAGE, IMarker.PRIORITY, IMarker.DONE, IMarker.CHAR_START, IMarker.CHAR_END, IMarker.LINE_NUMBER, IMarker.USER_EDITABLE}, new Object[]{task.getMessage(), new Integer(priority), org.eclipse.jdt.internal.compiler.util.Util.toBoolean(false), new Integer(task.getSourceStart()), new Integer((task.getSourceEnd() + 1)), new Integer(task.getSourceLineNumber()), new Boolean(false)});]marker.setAttributes(JAVA_PROBLEM_MARKER_ATTRIBUTE_NAMES, new Object[]{task.getMessage(), priority, org.eclipse.jdt.internal.compiler.util.Util.toBoolean(false), new Integer(task.getSourceStart()), new Integer((task.getSourceEnd() + 1)), new Integer(task.getSourceLineNumber()), Boolean.FALSE});",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 81505,
		"linenumber" : 948,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "boolean paramsMatch = ((complyTo15 && (methodTypeErasure == ((method2.returnType == null) ? null : method2.returnType.erasure()))) ? method.areParameterErasuresEqual(method2) : method.areParametersEqual(method2));]boolean paramsMatch = (complyTo15 ? ((methodTypeErasure == ((method2.returnType == null) ? null : method2.returnType.erasure())) && method.areParameterErasuresEqual(method2)) : method.areParametersEqual(method2));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 81506,
		"linenumber" : 948,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "boolean paramsMatch = (complyTo15 ? ((methodTypeErasure == ((method2.returnType == null) ? null : method2.returnType.erasure())) && method.areParameterErasuresEqual(method2)) : method.areParametersEqual(method2));]boolean paramsMatch = ((complyTo15 && (methodTypeErasure == ((method2.returnType == null) ? null : method2.returnType.erasure()))) ? method.areParameterErasuresEqual(method2) : method.areParametersEqual(method2));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 81744,
		"linenumber" : 299,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new JavaModelException(new JavaModelStatus(IJavaModelStatusConstants.NAME_COLLISION, Util.bind(\"status.nameCollision\", destFile.getFullPath().toString())));]new JavaModelException(new JavaModelStatus(IJavaModelStatusConstants.NAME_COLLISION, Messages.bind(Messages.status_nameCollision, new String[]{destFile.getFullPath().toString()})));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 82095,
		"linenumber" : 187,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(matchesName(this.pattern.name, qNameRef.tokens[indexOfFirstFieldBinding]) && (! (binding instanceof LocalVariableBinding)))](matchesName(this.pattern.name, qNameRef.tokens[indexOfFirstFieldBinding]) && (! (nameBinding instanceof LocalVariableBinding)))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 82096,
		"linenumber" : 188,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "FieldBinding fieldBinding = ((binding instanceof FieldBinding) ? (FieldBinding) binding : null);]FieldBinding fieldBinding = ((nameBinding instanceof FieldBinding) ? (FieldBinding) nameBinding : null);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 82219,
		"linenumber" : 47,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(((this.index + 1) < this.source.length) && (this.source[(this.index + 1)] == \'.\'));]((this.index < this.source.length) && (this.source[this.index] == \'.\'));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 82249,
		"linenumber" : 141,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "(IConstants.AccAnnotation + IConstants.AccInterface)](IConstants.AccAnnotation | IConstants.AccInterface)",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 82343,
		"linenumber" : 421,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "this.resolvedType = commonType;]this.resolvedType = commonType.capture();",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 82462,
		"linenumber" : 72,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSERT_STATEMENT",
		"changecontent" : "(_annoAstNode != null):\"annotation ast node missing.\"](_domAnnotation != null):\"annotation node missing.\"",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 82483,
		"linenumber" : 205,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "Factory.createAnnotationMirror((Annotation) expr, decl, env);",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 82484,
		"linenumber" : 207,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new IllegalStateException((\"illegal expression \" + expr));",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 82485,
		"linenumber" : 210,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "null;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 82738,
		"linenumber" : 52,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.targetJDK = this.referenceBinding.scope.environment().options.targetJDK;]this.targetJDK = this.referenceBinding.scope.compilerOptions().targetJDK;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 82811,
		"linenumber" : 180,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "(Clinit) method.setAssertionSupport(assertionSyntheticFieldBinding, (currentScope.environment().options.sourceLevel < ClassFileConstants.JDK1_5));](Clinit) method.setAssertionSupport(assertionSyntheticFieldBinding, (currentScope.compilerOptions().sourceLevel < ClassFileConstants.JDK1_5));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 82933,
		"linenumber" : 71,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSERT_STATEMENT",
		"changecontent" : "(_paramIndex > 0):(\"invalid param index \" + _paramIndex)](_paramIndex >= 0):(\"invalid param index \" + _paramIndex)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 82943,
		"linenumber" : 107,
		"changeype" : "ATTRIBUTE_TYPE_CHANGE",
		"changeentity" : "PARAMETERIZED_TYPE",
		"changecontent" : "Set<IFile>",
		"parententity" : "FIELD"
	},
	{
		"linetupleid" : 83009,
		"linenumber" : 42,
		"changeype" : "REMOVED_CLASS",
		"changeentity" : "CLASS",
		"changecontent" : "org.eclipse.jdt.apt.core.internal.generatedfile.ResourceChangedListener.Visitor",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 83009,
		"linenumber" : 61,
		"changeype" : "ADDITIONAL_CLASS",
		"changeentity" : "CLASS",
		"changecontent" : "org.eclipse.jdt.apt.core.internal.generatedfile.ResourceChangedListener.PreBuildVisitor",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 83386,
		"linenumber" : 164,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.unit.types[i] = convert((SourceType) typeInfo.getHandle(), compilationResult);]types[i] = convert((SourceType) typeInfo.getHandle(), compilationResult);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 83392,
		"linenumber" : 300,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new JavaModelException(new JavaModelStatus(IJavaModelStatusConstants.NAME_COLLISION, Messages.bind(Messages.status_nameCollision, new String[]{destFile.getFullPath().toString()})));]new JavaModelException(new JavaModelStatus(IJavaModelStatusConstants.NAME_COLLISION, Messages.bind(Messages.status_nameCollision, destFile.getFullPath().toString())));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 83493,
		"linenumber" : 187,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "boolean isRawMemberInvocation = ((((! method.isStatic()) && (! receiverType.isUnboundWildcard())) && method.declaringClass.isRawType()) && (method.hasSubstitutedParameters() || method.hasSubstitutedReturnType()));]boolean isRawMemberInvocation = ((((! method.isStatic()) && (! receiverType.isUnboundWildcard())) && method.declaringClass.isRawType()) && method.hasSubstitutedParameters());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 83541,
		"linenumber" : 776,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "List<IProblem> problems:_allProblems.values()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 83541,
		"linenumber" : 776,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "MarkerInfo info:_markerInfos",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 83834,
		"linenumber" : 154,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_STATEMENT",
		"changecontent" : "scope.referenceType().kind()]this.scope.referenceType().kind()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 83868,
		"linenumber" : 195,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "Map.Entry<FactoryContainer, Boolean> e:containers.entrySet()]Map.Entry<FactoryContainer, Boolean> e:fOriginalPath.entrySet()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 84032,
		"linenumber" : 44,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new BuildException((Messages.getString(\"JdtApt.0\") + file));]new BuildException((Messages.JdtApt_noWorkspace + file));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 84194,
		"linenumber" : 134,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSERT_STATEMENT",
		"changecontent" : "((((phase == Phase.RECONCILE) && (compilationUnit != null)) && (file == null)) || (((phase == Phase.BUILD) && (compilationUnit == null)) && (file != null))):(\"Unexpected phase value \" + phase)](((phase == Phase.RECONCILE) && (compilationUnit != null)) || (((phase == Phase.BUILD) && (compilationUnit == null)) && (file != null))):(\"Unexpected phase value \" + phase)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 84431,
		"linenumber" : 172,
		"changeype" : "ADDITIONAL_CLASS",
		"changeentity" : "CLASS",
		"changecontent" : "org.eclipse.jdt.apt.core.util.AptConfig.ProcessorOptionsParser",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 84431,
		"linenumber" : 172,
		"changeype" : "REMOVED_CLASS",
		"changeentity" : "CLASS",
		"changecontent" : "org.eclipse.jdt.apt.core.util.AptConfig.OptionsParser",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 84518,
		"linenumber" : 199,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSERT_STATEMENT",
		"changecontent" : "(PLUGIN_FACTORY_MAP.size() == 0):\"loadPluginFactoryMap() called more than once\"](_pluginFactoryMap.size() == 0):\"loadPluginFactoryMap() called more than once\"",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 84602,
		"linenumber" : 119,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "_result = new APTResult(Collections.<IFile>emptySet(), deletedFiles, Collections.<String>emptySet(), Collections.<IFile, List<IProblem>>emptyMap(), false);]_result = new APTResult(Collections.<IFile>emptySet(), allDeletedFiles, Collections.<IFile, Set<String>>emptyMap(), Collections.<IFile, List<IProblem>>emptyMap(), false);",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 84789,
		"linenumber" : 161,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_STATEMENT",
		"changecontent" : "this.scope.referenceType().kind()]TypeDeclaration.kind(this.scope.referenceType().modifiers)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 84790,
		"linenumber" : 161,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "TypeDeclaration.ENUM_DECL",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 84790,
		"linenumber" : 162,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "IGenericType.ENUM_DECL",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 84818,
		"linenumber" : 871,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "SearchPattern decodedPattern = new QualifiedTypeDeclarationPattern(packageDeclaration, typeDeclaration.name, convertTypeKind(typeDeclaration.kind()), matchRule);]SearchPattern decodedPattern = new QualifiedTypeDeclarationPattern(packageDeclaration, typeDeclaration.name, convertTypeKind(TypeDeclaration.kind(typeDeclaration.modifiers)), matchRule);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 84866,
		"linenumber" : 54,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.insideEnumConstantPart = (typeDeclaration.kind() == IGenericType.ENUM_DECL);]this.insideEnumConstantPart = (TypeDeclaration.kind(typeDeclaration.modifiers) == TypeDeclaration.ENUM_DECL);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 84973,
		"linenumber" : 154,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "Map.Entry<FactoryContainer, Boolean> entry:factories.entrySet()]Map.Entry<FactoryContainer, FactoryPath.Attributes> entry:factories.entrySet()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 84994,
		"linenumber" : 93,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "FactoryContainer fc:containers]FactoryContainer fc:containers.keySet()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 85012,
		"linenumber" : 298,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "Map.Entry<FactoryContainer, Boolean> e:fOriginalPath.entrySet()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 85012,
		"linenumber" : 411,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "FactoryPathEntry originalFpe:fOriginalPath",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 85013,
		"linenumber" : 299,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "FactoryContainer fc = e.getKey();",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 85013,
		"linenumber" : 413,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "FactoryPathEntry fpe = new FactoryPathEntry(originalFpe._fc, originalFpe._attr);",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 85014,
		"linenumber" : 300,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "fFactoryPathList.addElement(fc);",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 85014,
		"linenumber" : 300,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "fFactoryPathList.addElement(fc);]fFactoryPathList.addElement(fpe);",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 85015,
		"linenumber" : 301,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "fFactoryPathList.setChecked(fc, e.getValue());",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 85015,
		"linenumber" : 301,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "fFactoryPathList.setChecked(fc, e.getValue());]fFactoryPathList.setChecked(fpe, fpe._attr.isEnabled());",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 85042,
		"linenumber" : 218,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "System.arraycopy(constraintSubstitutes, 0, (constraintSubstitutes = new TypeBinding[(2 * length)]), 0, length);]System.arraycopy(constraintSubstitutes, 0, (constraintSubstitutes = new TypeBinding[(length + 1)]), 0, length);",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 85814,
		"linenumber" : 243,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "final char[] src = processorEnv.getSourceForFile(file);]final ICompilationUnit unit = processorEnv.getICompilationUnitForFile(file);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 85815,
		"linenumber" : 244,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSERT_STATEMENT",
		"changecontent" : "(src != null):(\"cannot locate source for file \" + file.getName())](unit != null):(\"cannot locate ICompilationUnit for file \" + file.getName())",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 85816,
		"linenumber" : 245,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "sourceForFilesWithMissingType.add(src);]unitsForFilesWithMissingType.add(unit);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 85874,
		"linenumber" : 94,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "FactoryContainer fc:containers.keySet()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 85874,
		"linenumber" : 115,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "Map.Entry<FactoryContainer, FactoryPath.Attributes> entry:containers.entrySet()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 85920,
		"linenumber" : 115,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "File f = getOutputFileForLocation(loc, pkg, relPath);]IPath path = getOutputFileForLocation(loc, pkg, relPath);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 85921,
		"linenumber" : 116,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((charsetName == null) ? new PrintWriter(f) : new PrintWriter(f, charsetName));]((charsetName == null) ? new RefreshingPrintWriter(path, _env.getProject()) : new RefreshingPrintWriter(path, _env.getProject(), charsetName));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 86209,
		"linenumber" : 729,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_STATEMENT",
		"changecontent" : "(flags & ((AccInterface | AccAnnotation) | AccEnum))](flags & ((ClassFileConstants.AccInterface | ClassFileConstants.AccAnnotation) | ClassFileConstants.AccEnum))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 86210,
		"linenumber" : 730,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "ClassFileConstants.AccInterface",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 86210,
		"linenumber" : 730,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "AccInterface",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 86226,
		"linenumber" : 26,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(originalField.name, (((originalField.modifiers & AccEnum) != 0) ? parameterizedDeclaringClass : (((originalField.modifiers & AccStatic) != 0) ? originalField.type : Scope.substitute(parameterizedDeclaringClass, originalField.type))), originalField.modifiers, parameterizedDeclaringClass, null);]super(originalField.name, (((originalField.modifiers & ClassFileConstants.AccEnum) != 0) ? parameterizedDeclaringClass : (((originalField.modifiers & ClassFileConstants.AccStatic) != 0) ? originalField.type : Scope.substitute(parameterizedDeclaringClass, originalField.type))), originalField.modifiers, parameterizedDeclaringClass, null);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 86392,
		"linenumber" : 648,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "DO_STATEMENT",
		"changecontent" : "(((currentType = currentType.superclass()) != null) && ((currentType.tagBits & HasNoMemberTypes) == 0))](((currentType = currentType.superclass()) != null) && ((currentType.tagBits & TagBits.HasNoMemberTypes) == 0))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 86766,
		"linenumber" : 27,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(project.getLocation().append(path).toFile());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 86766,
		"linenumber" : 30,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(path.toFile());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 86819,
		"linenumber" : 459,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "APTResult newResult = runAPT(factories, newEnv, filesWithMissingType, unitsForFiles, (round ++));]APTResult newResult = runAPT(factories, newEnv, filesWithMissingType, unitsForFiles, (internalRound ++));",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 87077,
		"linenumber" : 172,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(range != null)](range >= 0)",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 87078,
		"linenumber" : 173,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "this.comments[range[0]].getStartPosition();]this.comments[(int) (range >> 32)].getStartPosition();",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 87105,
		"linenumber" : 267,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "public",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 87840,
		"linenumber" : 191,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Expression currentExpression = expressions[0];]Expression expression = this.expressions[0];",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 87841,
		"linenumber" : 192,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "((currentExpression != null) && (currentExpression instanceof ArrayInitializer))]((expression != null) && (expression instanceof ArrayInitializer))",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 88133,
		"linenumber" : 330,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "argumentTypes = new TypeBinding[]{scope.getJavaLangString(), BaseTypes.IntBinding};]argumentTypes = new TypeBinding[]{scope.getJavaLangString(), TypeBinding.INT};",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 88954,
		"linenumber" : 116,
		"changeype" : "DECREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "private",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 88997,
		"linenumber" : 99,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i >= 0)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 88997,
		"linenumber" : 99,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int i = (length - 1);",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 88997,
		"linenumber" : 99,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "i --;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 88997,
		"linenumber" : 99,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int i = 0;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 88997,
		"linenumber" : 99,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "POSTFIX_EXPRESSION",
		"changecontent" : "i ++;",
		"parententity" : "FOR_INCR"
	},
	{
		"linetupleid" : 88997,
		"linenumber" : 99,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < length)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 89235,
		"linenumber" : 170,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "initsOnExceptions[index] = ((initsOnExceptions[index] == FlowInfo.DEAD_END) ? flowInfo.copy().unconditionalInits() : initsOnExceptions[index].mergedWith(flowInfo.copy().unconditionalInits()));]initsOnExceptions[index] = (((initsOnExceptions[index].tagBits & FlowInfo.UNREACHABLE) == 0) ? initsOnExceptions[index].mergedWith(flowInfo) : flowInfo.unconditionalCopy());",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 89237,
		"linenumber" : 90,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "this.parent.recordUsingNullReference(scope, local, expression, nullStatus[i], flowInfo);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 89237,
		"linenumber" : 90,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "this.parent.recordUsingNullReference(scope, local, expression, nullStatus[i], flowInfo);]this.parent.recordUsingNullReference(scope, local, expression, this.nullCheckTypes[i], flowInfo);",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 89237,
		"linenumber" : 130,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "scope.problemReporter().localVariableCanOnlyBeNull(local, expression);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 89241,
		"linenumber" : 151,
		"changeype" : "RETURN_TYPE_DELETE",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "org.eclipse.jdt.internal.compiler.flow.FinallyFlowContext.recordNullReference(LocalVariableBinding,Expression,int): boolean]org.eclipse.jdt.internal.compiler.flow.FinallyFlowContext.recordNullReference(LocalVariableBinding,Expression,int): void",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 89241,
		"linenumber" : 265,
		"changeype" : "PARAMETER_INSERT",
		"changeentity" : "PARAMETER",
		"changecontent" : "local",
		"parententity" : "PARAMETERS"
	},
	{
		"linetupleid" : 89242,
		"linenumber" : 152,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(nullCount == 0)](this.nullCount == 0)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 89243,
		"linenumber" : 153,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "nullReferences = new Expression[5];]this.nullReferences = new Expression[5];",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 89243,
		"linenumber" : 268,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.nullLocals = new LocalVariableBinding[5];",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 89244,
		"linenumber" : 154,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "nullStatus = new int[5];]this.nullCheckTypes = new int[5];",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 89245,
		"linenumber" : 156,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(nullCount == nullReferences.length)](this.nullCount == this.nullLocals.length)",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 89246,
		"linenumber" : 157,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "System.arraycopy(nullReferences, 0, (nullReferences = new Expression[(nullCount * 2)]), 0, nullCount);]System.arraycopy(this.nullReferences, 0, (this.nullReferences = new Expression[newLength]), 0, this.nullCount);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 89246,
		"linenumber" : 274,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "System.arraycopy(this.nullLocals, 0, (this.nullLocals = new LocalVariableBinding[newLength]), 0, this.nullCount);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 89247,
		"linenumber" : 158,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "System.arraycopy(nullStatus, 0, (nullStatus = new int[(nullCount * 2)]), 0, nullCount);]System.arraycopy(this.nullCheckTypes, 0, (this.nullCheckTypes = new int[newLength]), 0, this.nullCount);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 89248,
		"linenumber" : 161,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "nullReferences[nullCount] = expression;]this.nullReferences[this.nullCount] = expression;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 89514,
		"linenumber" : 180,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int l = ((participants == null) ? 0 : participants.length);]int l = participants.length;",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 89635,
		"linenumber" : 392,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "buffer.append(\"{\").append(((((((((((modifiers & ClassFileConstants.AccDeprecated) != 0) ? \"deprecated \" : \"\") + (((modifiers & 0x0001) == 1) ? \"public \" : \"\")) + (((modifiers & 0x0002) == 0x0002) ? \"private \" : \"\")) + (((modifiers & 0x0004) == 0x0004) ? \"protected \" : \"\")) + (((modifiers & 0x0008) == 0x000008) ? \"static \" : \"\")) + (((modifiers & 0x0010) == 0x0010) ? \"final \" : \"\")) + (((modifiers & 0x0040) == 0x0040) ? \"volatile \" : \"\")) + (((modifiers & 0x0080) == 0x0080) ? \"varargs \" : \"\"))).append(getSelector()).append(desc).append(\"}\");]buffer.append(\"{\").append(((((((((((modifiers & ClassFileConstants.AccDeprecated) != 0) ? \"deprecated \" : \"\") + (((modifiers & 0x0001) == 1) ? \"public \" : \"\")) + (((modifiers & 0x0002) == 0x0002) ? \"private \" : \"\")) + (((modifiers & 0x0004) == 0x0004) ? \"protected \" : \"\")) + (((modifiers & 0x0008) == 0x000008) ? \"static \" : \"\")) + (((modifiers & 0x0010) == 0x0010) ? \"final \" : \"\")) + (((modifiers & 0x0040) == 0x0040) ? \"bridge \" : \"\")) + (((modifiers & 0x0080) == 0x0080) ? \"varargs \" : \"\"))).append(getSelector()).append(desc).append(\"}\");",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 89670,
		"linenumber" : 53,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "FlowInfo mergedInfo = statement.analyseCode(currentScope, (labelContext = new LabelFlowContext(flowContext, this, label, (targetLabel = new Label()), currentScope)), flowInfo).mergedWith(labelContext.initsOnBreak);]FlowInfo mergedInfo = statement.analyseCode(currentScope, (labelContext = new LabelFlowContext(flowContext, this, label, (targetLabel = new BranchLabel()), currentScope)), flowInfo).mergedWith(labelContext.initsOnBreak);",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 89893,
		"linenumber" : 957,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "(int) UnusedLabel](int) (UnusedLabel >>> 32)",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 89979,
		"linenumber" : 369,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSERT_STATEMENT",
		"changecontent" : "(! (o instanceof IResolvedAnnotation)):(\"Unexpected return value from convertDomValueToMirrorValue! o.getClass().getName() = \" + o.getClass().getName())](! (o instanceof IAnnotationBinding)):(\"Unexpected return value from convertDomValueToMirrorValue! o.getClass().getName() = \" + o.getClass().getName())",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 90015,
		"linenumber" : 26,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "protected",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 90363,
		"linenumber" : 378,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "ExceptionLabel naturalExitExceptionHandler = (((finallyMode == FINALLY_SUBROUTINE) && requiresNaturalExit) ? new ExceptionLabel(codeStream, null) : null);]ExceptionLabel naturalExitExceptionHandler = ((requiresNaturalExit && ((finallyMode == FINALLY_SUBROUTINE) || (finallyMode == FINALLY_EMULATE_RET))) ? new ExceptionLabel(codeStream, null) : null);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 91969,
		"linenumber" : 209,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "syntheticAccessor = (SourceTypeBinding) this.codegenBinding.declaringClass.addSyntheticMethod(this.codegenBinding, isSuperAccess());]syntheticAccessor = (SourceTypeBinding) declaringClass.addSyntheticMethod(this.codegenBinding, isSuperAccess());",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 92096,
		"linenumber" : 63,
		"changeype" : "INCREASING_ACCESSIBILITY_CHANGE",
		"changeentity" : "MODIFIER",
		"changecontent" : "private",
		"parententity" : "MODIFIERS"
	},
	{
		"linetupleid" : 92169,
		"linenumber" : 798,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(((this.bits & IsNonNull) != 0) || ((this.constant != null) && (this.constant != Constant.NotAConstant)))]((this.constant != null) && (this.constant != Constant.NotAConstant))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 92603,
		"linenumber" : 933,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(this.synthetics[RECEIVER_TYPE_EMUL] == null)](this.synthetics[SourceTypeBinding.RECEIVER_TYPE_EMUL] == null)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 92604,
		"linenumber" : 934,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.synthetics[RECEIVER_TYPE_EMUL] = new HashMap(5);]this.synthetics[SourceTypeBinding.RECEIVER_TYPE_EMUL] = new HashMap(5);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 92968,
		"linenumber" : 1080,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "CONTINUE_STATEMENT",
		"changecontent" : "",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 92968,
		"linenumber" : 1080,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "CONTINUE_STATEMENT",
		"changecontent" : "nextMethod",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 93086,
		"linenumber" : 196,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CATCH_CLAUSE",
		"changecontent" : "Assert.AssertionFailedException]AssertionFailedException",
		"parententity" : "CATCH_CLAUSES"
	},
	{
		"linetupleid" : 93273,
		"linenumber" : 92,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "boolean considerNulls = ((otherInits.tagBits & NULL_FLAG_MASK) != 0);]boolean otherHasNulls = ((otherInits.tagBits & NULL_FLAG_MASK) != 0);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 93273,
		"linenumber" : 99,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "boolean thisHadNulls = ((this.tagBits & NULL_FLAG_MASK) != 0);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 93274,
		"linenumber" : 93,
		"changeype" : "STATEMENT_ORDERING_CHANGE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "long na1;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 93274,
		"linenumber" : 93,
		"changeype" : "STATEMENT_ORDERING_CHANGE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "long na2;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 93274,
		"linenumber" : 93,
		"changeype" : "STATEMENT_ORDERING_CHANGE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "long b3;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 93274,
		"linenumber" : 93,
		"changeype" : "STATEMENT_ORDERING_CHANGE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "long b4;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 93274,
		"linenumber" : 101,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "long na3;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 93274,
		"linenumber" : 101,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "long nb1;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 93275,
		"linenumber" : 94,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "considerNulls]otherHasNulls",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 93276,
		"linenumber" : 95,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((this.tagBits & NULL_FLAG_MASK) == 0)](! thisHadNulls)",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 93277,
		"linenumber" : 96,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.nullAssignmentStatusBit1 = otherInits.nullAssignmentStatusBit1;]this.nullBit3 = otherInits.nullBit3;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 93278,
		"linenumber" : 97,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.nullAssignmentStatusBit2 = otherInits.nullAssignmentStatusBit2;]this.nullBit4 = otherInits.nullBit4;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 93279,
		"linenumber" : 98,
		"changeype" : "STATEMENT_ORDERING_CHANGE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.nullAssignmentValueBit1 = otherInits.nullAssignmentValueBit1;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 93279,
		"linenumber" : 98,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.nullAssignmentValueBit1 = otherInits.nullAssignmentValueBit1;]this.nullBit1 = otherInits.nullBit1;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 93280,
		"linenumber" : 99,
		"changeype" : "STATEMENT_ORDERING_CHANGE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.nullAssignmentValueBit2 = otherInits.nullAssignmentValueBit2;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 93280,
		"linenumber" : 99,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.nullAssignmentValueBit2 = otherInits.nullAssignmentValueBit2;]this.nullBit2 = otherInits.nullBit2;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 93480,
		"linenumber" : 84,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.parameterQualifications[i] = (isCaseSensitive() ? parameterQualifications[i] : CharOperation.toLowerCase(parameterQualifications[i]));]this.parameterQualifications[i] = (isCaseSensitive() ? parameterQualifications[(i + offset)] : CharOperation.toLowerCase(parameterQualifications[(i + offset)]));",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 93481,
		"linenumber" : 85,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "this.parameterSimpleNames[i] = (isCaseSensitive() ? parameterSimpleNames[i] : CharOperation.toLowerCase(parameterSimpleNames[i]));]this.parameterSimpleNames[i] = (isCaseSensitive() ? parameterSimpleNames[(i + offset)] : CharOperation.toLowerCase(parameterSimpleNames[(i + offset)]));",
		"parententity" : "FOR_STATEMENT"
	},
	{
		"linetupleid" : 94107,
		"linenumber" : 47,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "Enumeration e = this.zipFile.entries();]Enumeration<? extends ZipEntry> e = this.zipFile.entries();",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 94333,
		"linenumber" : 172,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "this.receiver.generateCode(currentScope, codeStream, (! (isStatic = this.codegenBinding.isStatic())));]this.receiver.generateCode(currentScope, codeStream, (! isStatic));",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 94480,
		"linenumber" : 29,
		"changeype" : "PARAMETER_TYPE_CHANGE",
		"changeentity" : "SINGLE_TYPE",
		"changecontent" : "env: BuildEnv",
		"parententity" : "PARAMETER"
	},
	{
		"linetupleid" : 94631,
		"linenumber" : 368,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "buffer.append(\"{\").append(((((((((((modifiers & ClassFileConstants.AccDeprecated) != 0) ? \"deprecated \" : \"\") + (((modifiers & 0x0001) == 1) ? \"public \" : \"\")) + (((modifiers & 0x0002) == 0x0002) ? \"private \" : \"\")) + (((modifiers & 0x0004) == 0x0004) ? \"protected \" : \"\")) + (((modifiers & 0x0008) == 0x000008) ? \"static \" : \"\")) + (((modifiers & 0x0010) == 0x0010) ? \"final \" : \"\")) + (((modifiers & 0x0040) == 0x0040) ? \"volatile \" : \"\")) + (((modifiers & 0x0080) == 0x0080) ? \"transient \" : \"\"))).append(getTypeName()).append(\" \").append(getName()).append(\" \").append(getConstant()).append(\"}\").toString();]buffer.append(\'{\').append(((((((((((modifiers & ClassFileConstants.AccDeprecated) != 0) ? \"deprecated \" : Util.EMPTY_STRING) + (((modifiers & 0x0001) == 1) ? \"public \" : Util.EMPTY_STRING)) + (((modifiers & 0x0002) == 0x0002) ? \"private \" : Util.EMPTY_STRING)) + (((modifiers & 0x0004) == 0x0004) ? \"protected \" : Util.EMPTY_STRING)) + (((modifiers & 0x0008) == 0x000008) ? \"static \" : Util.EMPTY_STRING)) + (((modifiers & 0x0010) == 0x0010) ? \"final \" : Util.EMPTY_STRING)) + (((modifiers & 0x0040) == 0x0040) ? \"volatile \" : Util.EMPTY_STRING)) + (((modifiers & 0x0080) == 0x0080) ? \"transient \" : Util.EMPTY_STRING))).append(getTypeName()).append(\' \').append(getName()).append(\' \').append(getConstant()).append(\'}\').toString();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 94941,
		"linenumber" : 87,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "\"method\".equals(entry.getKey().getSimpleName().toString())]\"method\".equals(keyName)",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 94942,
		"linenumber" : 88,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "method = (String) entry.getValue().getValue();]method = (String) value.getValue();",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 95020,
		"linenumber" : 368,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(target instanceof java.io.File)](target instanceof File)",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 95021,
		"linenumber" : 369,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(java.io.File) target.isFile()](File) target.isFile()",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 95315,
		"linenumber" : 21,
		"changeype" : "ADDITIONAL_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "org.eclipse.jdt.internal.formatter.comment.IJavaDocTagConstants.JAVADOC_BREAK_TAGS : char[][]",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 95315,
		"linenumber" : 21,
		"changeype" : "REMOVED_OBJECT_STATE",
		"changeentity" : "FIELD",
		"changecontent" : "org.eclipse.jdt.internal.formatter.comment.IJavaDocTagConstants.JAVADOC_BREAK_TAGS : String[]",
		"parententity" : "CLASS"
	},
	{
		"linetupleid" : 95860,
		"linenumber" : 361,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "this.scanner.getLineNumber(position);]Util.getLineNumber(position, this.scanner.lineEnds, 0, this.scanner.linePtr);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 96008,
		"linenumber" : 64,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((bits & IsReachable) == 0)]((this.bits & ASTNode.IsReachable) == 0)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 96011,
		"linenumber" : 68,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "targetLabel.place();]this.targetLabel.place();",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 96016,
		"linenumber" : 87,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(constantExpression == null)](this.constantExpression == null)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 96022,
		"linenumber" : 99,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(((switchExpressionType != null) && switchExpressionType.isEnum()) && (constantExpression instanceof SingleNameReference))](((switchExpressionType != null) && switchExpressionType.isEnum()) && (this.constantExpression instanceof SingleNameReference))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 96023,
		"linenumber" : 100,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "(SingleNameReference) constantExpression.setActualReceiverType((ReferenceBinding) switchExpressionType);](SingleNameReference) this.constantExpression.setActualReceiverType((ReferenceBinding) switchExpressionType);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 96024,
		"linenumber" : 102,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "TypeBinding caseType = constantExpression.resolveType(scope);]TypeBinding caseType = this.constantExpression.resolveType(scope);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 96027,
		"linenumber" : 104,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(constantExpression.isConstantValueOfTypeAssignableToType(caseType, switchExpressionType) || caseType.isCompatibleWith(switchExpressionType))](this.constantExpression.isConstantValueOfTypeAssignableToType(caseType, switchExpressionType) || caseType.isCompatibleWith(switchExpressionType))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 96067,
		"linenumber" : 224,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "\"FChild\".equals(type.getSimpleName().toString())]type.equals(_elementFChild)",
		"parententity" : "FOREACH_STATEMENT"
	},
	{
		"linetupleid" : 97404,
		"linenumber" : 589,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(isNarrowing ? checkProvablyDistinctTypes(scope, match, expressionType, 0) : checkProvablyDistinctTypes(scope, castType, match, 0))](isNarrowing ? match.isProvablyDistinct(expressionType) : castType.isProvablyDistinct(match))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 97783,
		"linenumber" : 27,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "CONSTRUCTOR_INVOCATION",
		"changecontent" : "super(new char[][]{CharOperation.concat(LocalTypePrefix, scope.referenceContext.name)}, scope, enclosingType);]super(new char[][]{CharOperation.concat(LocalTypeBinding.LocalTypePrefix, scope.referenceContext.name)}, scope, enclosingType);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 97809,
		"linenumber" : 68,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "checkCapturedLocalInitializationIfNecessary((ReferenceBinding) allocatedType.erasure(), currentScope, flowInfo);]checkCapturedLocalInitializationIfNecessary((ReferenceBinding) ((this.anonymousType == null) ? this.binding.declaringClass.erasure() : this.binding.declaringClass.superclass().erasure()), currentScope, flowInfo);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 99058,
		"linenumber" : 57,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_STATEMENT",
		"changecontent" : "kind](kind & K_MASK)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 99059,
		"linenumber" : 58,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_CASE",
		"changecontent" : "CodeFormatter.K_SINGLE_LINE_COMMENT]K_SINGLE_LINE_COMMENT",
		"parententity" : "SWITCH_STATEMENT"
	},
	{
		"linetupleid" : 99139,
		"linenumber" : 69,
		"changeype" : "ATTRIBUTE_RENAMING",
		"changeentity" : "FIELD",
		"changecontent" : "org.eclipse.jdt.internal.formatter.DefaultCodeFormatter.NEW_JAVA_DOC_FORMAT : String",
		"parententity" : "FIELD"
	},
	{
		"linetupleid" : 99140,
		"linenumber" : 70,
		"changeype" : "ATTRIBUTE_RENAMING",
		"changeentity" : "FIELD",
		"changecontent" : "org.eclipse.jdt.internal.formatter.DefaultCodeFormatter.ENABLE_NEW_JAVADOC_FORMAT : boolean",
		"parententity" : "FIELD"
	},
	{
		"linetupleid" : 99141,
		"linenumber" : 71,
		"changeype" : "ATTRIBUTE_RENAMING",
		"changeentity" : "FIELD",
		"changecontent" : "org.eclipse.jdt.internal.formatter.DefaultCodeFormatter.FORCE_NEW_COMMENT_FORMAT : boolean",
		"parententity" : "FIELD"
	},
	{
		"linetupleid" : 99142,
		"linenumber" : 72,
		"changeype" : "ATTRIBUTE_RENAMING",
		"changeentity" : "FIELD",
		"changecontent" : "org.eclipse.jdt.internal.formatter.DefaultCodeFormatter.WARNING_JAVADOC_COMMENTS : String",
		"parententity" : "FIELD"
	},
	{
		"linetupleid" : 99143,
		"linenumber" : 73,
		"changeype" : "ATTRIBUTE_RENAMING",
		"changeentity" : "FIELD",
		"changecontent" : "org.eclipse.jdt.internal.formatter.DefaultCodeFormatter.PRINTED_OLD_JAVA_DOC_WARNING : boolean",
		"parententity" : "FIELD"
	},
	{
		"linetupleid" : 99270,
		"linenumber" : 158,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "fieldStore(codeStream, this.codegenBinding, ((syntheticAccessors == null) ? null : syntheticAccessors[WRITE]), valueRequired);]fieldStore(codeStream, this.codegenBinding, ((this.syntheticAccessors == null) ? null : this.syntheticAccessors[FieldReference.WRITE]), valueRequired);",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 99305,
		"linenumber" : 400,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "((currentScope.enclosingSourceType() != this.codegenBinding.declaringClass) && (binding.constant() == Constant.NotAConstant))]((currentScope.enclosingSourceType() != this.codegenBinding.declaringClass) && (this.binding.constant() == Constant.NotAConstant))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 99306,
		"linenumber" : 402,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(syntheticAccessors == null)](this.syntheticAccessors == null)",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 99307,
		"linenumber" : 403,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "syntheticAccessors = new MethodBinding[2];]this.syntheticAccessors = new MethodBinding[2];",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 99308,
		"linenumber" : 404,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "syntheticAccessors[(isReadAccess ? READ : WRITE)] = (SourceTypeBinding) this.codegenBinding.declaringClass.addSyntheticMethod(this.codegenBinding, isReadAccess);]this.syntheticAccessors[(isReadAccess ? FieldReference.READ : FieldReference.WRITE)] = (SourceTypeBinding) this.codegenBinding.declaringClass.addSyntheticMethod(this.codegenBinding, isReadAccess);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 100302,
		"linenumber" : 79,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(caughtException instanceof Error)](this.caughtException instanceof Error)",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 100303,
		"linenumber" : 80,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "(Error) caughtException;](Error) this.caughtException;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 100304,
		"linenumber" : 81,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "(RuntimeException) caughtException;](RuntimeException) this.caughtException;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 100372,
		"linenumber" : 117,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "((! fReadFromBuffer) && (c != (- 1)))]((! this.fReadFromBuffer) && (c != (- 1)))",
		"parententity" : "DO_STATEMENT"
	},
	{
		"linetupleid" : 100374,
		"linenumber" : 114,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "DO_STATEMENT",
		"changecontent" : "((fSkipWhiteSpace && fWasWhiteSpace) && (c == \' \'))]((this.fSkipWhiteSpace && this.fWasWhiteSpace) && (c == \' \'))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 100375,
		"linenumber" : 127,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "fWasWhiteSpace = (((c == \' \') || (c == \'\\r\')) || (c == \'\\n\'));]this.fWasWhiteSpace = (((c == \' \') || (c == \'\\r\')) || (c == \'\\n\'));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 100649,
		"linenumber" : 1161,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_STATEMENT",
		"changecontent" : "elementKindStack[i]]this.elementKindStack[i]",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 100987,
		"linenumber" : 1046,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "identifierLengthStack[identifierLengthPtr] = completionIndex;]this.identifierLengthStack[this.identifierLengthPtr] = completionIndex;",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 100988,
		"linenumber" : 1047,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int ptr = (identifierPtr -= (length - completionIndex));]int ptr = (this.identifierPtr -= (length - completionIndex));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 101022,
		"linenumber" : 1222,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "(SelectionScanner) scanner.selectionIdentifier = assistIdent;](SelectionScanner) this.scanner.selectionIdentifier = assistIdent;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 101391,
		"linenumber" : 309,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(((currentToken == TokenNameCOMMA) || (currentToken == TokenNameSEMICOLON)) && (astStack[astPtr] instanceof FieldDeclaration))](((this.currentToken == TokenNameCOMMA) || (this.currentToken == TokenNameSEMICOLON)) && (this.astStack[this.astPtr] instanceof FieldDeclaration))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 102301,
		"linenumber" : 44,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "((binding == null) || (binding instanceof ReferenceBinding));]((this.binding == null) || (this.binding instanceof ReferenceBinding));",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 102393,
		"linenumber" : 53,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "new char[][]{token};]new char[][]{this.token};",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 104485,
		"linenumber" : 47,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "buffer.append(source, declarationSourceStart, ((declarationSourceEnd - declarationSourceStart) + 1)).append(\"\\n\");]buffer.append(this.source, this.declarationSourceStart, ((this.declarationSourceEnd - this.declarationSourceStart) + 1)).append(\"\\n\");",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 106056,
		"linenumber" : 295,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "WHILE_STATEMENT",
		"changecontent" : "(((currentSpace + space) > limit) && (entryQueueTail != null))](((this.currentSpace + space) > limit) && (this.entryQueueTail != null))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 106057,
		"linenumber" : 296,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "METHOD_INVOCATION",
		"changecontent" : "this.privateRemoveEntry(entryQueueTail, false);]privateRemoveEntry(this.entryQueueTail, false);",
		"parententity" : "WHILE_STATEMENT"
	},
	{
		"linetupleid" : 107774,
		"linenumber" : 748,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(! (hasGenericParameter(method) && (method.typeVariables == Binding.NO_TYPE_VARIABLES)));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 107774,
		"linenumber" : 759,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "RETURN_STATEMENT",
		"changecontent" : "(! hasGenericParameter(method));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 108035,
		"linenumber" : 157,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "SWITCH_STATEMENT",
		"changecontent" : "(isUnboxing ? postConversionType(currentScope).id : this.codegenBinding.returnType.id)](isUnboxing ? postConversionType(currentScope).id : codegenBinding.returnType.id)",
		"parententity" : "ELSE_STATEMENT"
	},
	{
		"linetupleid" : 108659,
		"linenumber" : 131,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "FOREACH_STATEMENT",
		"changecontent" : "Archive archive:archivesCache.values()]Archive archive:this.archivesCache.values()",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 108672,
		"linenumber" : 197,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "THROW_STATEMENT",
		"changecontent" : "new IOException((\"Unable to create parent directories for \" + f));]new IOException((\"Unable to create parent directories for \" + this.f));",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 108730,
		"linenumber" : 71,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "int length = unitSource.length;]int sourceLength = unitSource.length;",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 108731,
		"linenumber" : 72,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "begin = ((startPosition >= length) ? (length - 1) : startPosition);]begin = ((startPosition >= sourceLength) ? (sourceLength - 1) : startPosition);",
		"parententity" : "FOR_INIT"
	},
	{
		"linetupleid" : 108899,
		"linenumber" : 184,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "VARIABLE_DECLARATION_STATEMENT",
		"changecontent" : "ISourceElementRequestor.TypeParameterInfo[] result = new ISourceElementRequestor.TypeParameterInfo[typeParametersLength];]TypeParameterInfo[] result = new TypeParameterInfo[typeParametersLength];",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 110235,
		"linenumber" : 231,
		"changeype" : "STATEMENT_PARENT_CHANGE",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "(i < max)",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 110235,
		"linenumber" : 261,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "FOR_STATEMENT",
		"changecontent" : "((i < max) && (remainingFieldCount >= 0))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 110240,
		"linenumber" : 496,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "contexts = new IScopeContext[]{new ProjectScope(jproj.getProject()), new InstanceScope()};]contexts = new IScopeContext[]{new ProjectScope(jproj.getProject()), InstanceScope.INSTANCE};",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 110779,
		"linenumber" : 54,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "DO_STATEMENT",
		"changecontent" : "((traversedContext = traversedContext.parent) != null)]((traversedContext = traversedContext.getLocalParent()) != null)",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 110785,
		"linenumber" : 388,
		"changeype" : "STATEMENT_UPDATE",
		"changeentity" : "ASSIGNMENT",
		"changecontent" : "current = ((exceptionContext.initializationParent == null) ? exceptionContext.parent : exceptionContext.initializationParent);]current = ((exceptionContext.initializationParent == null) ? exceptionContext.getLocalParent() : exceptionContext.initializationParent);",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 110980,
		"linenumber" : 563,
		"changeype" : "CONDITION_EXPRESSION_CHANGE",
		"changeentity" : "DO_STATEMENT",
		"changecontent" : "((! wrapper.atEnd()) && (wrapper.signature[wrapper.start] == \'^\'))]((! wrapper.atEnd()) && (wrapper.signature[wrapper.start] == Util.C_EXCEPTION_START))",
		"parententity" : "THEN_STATEMENT"
	},
	{
		"linetupleid" : 111231,
		"linenumber" : 53,
		"changeype" : "STATEMENT_INSERT",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "(((var instanceof LocalVariableBinding) && (flowInfo.reachMode() == FlowInfo.REACHABLE)) && (FakedTrackingVariable.isAnyCloseable(this.expression.resolvedType) || (this.expression.resolvedType == TypeBinding.NULL)))",
		"parententity" : "METHOD"
	},
	{
		"linetupleid" : 111231,
		"linenumber" : 56,
		"changeype" : "STATEMENT_DELETE",
		"changeentity" : "IF_STATEMENT",
		"changecontent" : "shouldAnalyseResource",
		"parententity" : "METHOD"
	}
]
